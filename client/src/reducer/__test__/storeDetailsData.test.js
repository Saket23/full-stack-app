//@flow

import storeDetailsData, { initialState } from "../storeDetailsData";

describe("storeData", () => {
  describe("GET_DETAILS_START", () => {
    it("should return expected state", () => {
      const action = {
        type: "GET_DETAILS_START"
      };
      expect(storeDetailsData(initialState, action)).toMatchObject({
        ...initialState,
        isLoading: true
      });
    });
  });
  describe("GET_DETAILS_SUCCESS", () => {
    it("should return expected state", () => {
      const mockData = [
        {
          customer_name: "john",
          address: "3999  Richland Avenue,Tomball,TX,Texas"
        }
      ];
      const action = {
        type: "GET_DETAILS_SUCCESS",
        data: mockData
      };
      const state = { ...initialState, isLoading: true };
      expect(storeDetailsData(state, action)).toMatchObject({
        ...initialState,
        data: mockData
      });
    });
  });
  describe("GET_DETAILS_FAILURE", () => {
    it("should return expected state", () => {
      const action = {
        type: "GET_DETAILS_FAILURE",
        error: "some error"
      };
      const state = { ...initialState, isLoading: true };
      expect(storeDetailsData(state, action)).toMatchObject({
        ...initialState,
        error: action.error
      });
    });
  });
});
