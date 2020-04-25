//@flow

import storeData, { initialState } from "../storeData";

describe("storeData", () => {
  describe("GET_DATA_START", () => {
    it("should return expected state", () => {
      const action = {
        type: "GET_DATA_START"
      };
      expect(storeData(initialState, action)).toMatchObject({
        ...initialState,
        isLoading: true
      });
    });
  });
  describe("GET_DATA_SUCCESS", () => {
    it("should return expected state", () => {
      const mockData = [
        {
          customer_id: 1,
          customer_name: "john",
          age: 23,
          gender: "male"
        }
      ];
      const action = {
        type: "GET_DATA_SUCCESS",
        data: mockData
      };
      const state = { ...initialState, isLoading: true };
      expect(storeData(state, action)).toMatchObject({
        ...initialState,
        data: mockData
      });
    });
  });
  describe("GET_DATA_FAILURE", () => {
    it("should return expected state", () => {
      const action = {
        type: "GET_DATA_FAILURE",
        error: "some error"
      };
      const state = { ...initialState, isLoading: true };
      expect(storeData(state, action)).toMatchObject({
        ...initialState,
        error: action.error
      });
    });
  });
});
