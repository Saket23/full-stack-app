//@flow

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../getDetailsData";
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockBody = [
  {
    customer_name: "john",
    address: "3999  Richland Avenue,Tomball,TX,Texas"
  }
];

jest.mock("axios");

describe("getDetailsData", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      results: {}
    });
  });
  it("creates GET_DETAILS_SUCCESS when fetching result has been done", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: mockBody }
      })
    );

    const expectedActions = [
      { type: "GET_DETAILS_START" },
      { type: "GET_DETAILS_SUCCESS", data: mockBody }
    ];

    await store.dispatch(actions.getData());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates GET_DETAILS_FAILURE when fetching result has been done", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject({
        error: "Something bad happened"
      })
    );

    const expectedActions = [
      { type: "GET_DETAILS_START" },
      {
        type: "GET_DETAILS_FAILURE",
        error: { error: "Something bad happened" }
      }
    ];

    await store.dispatch(actions.getData());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
