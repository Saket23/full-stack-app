//@flow

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../getData";
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockBody = [
  {
    customer_id: 1,
    customer_name: "john",
    age: 23,
    gender: "male"
  }
];

jest.mock("axios");

describe("getData", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      results: {}
    });
  });
  it("creates GET_DATA_SUCCESS when fetching result has been done", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: mockBody }
      })
    );

    const expectedActions = [
      { type: "GET_DATA_START" },
      { type: "GET_DATA_SUCCESS", data: mockBody }
    ];

    await store.dispatch(actions.getData());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates GET_DATA_FAILURE when fetching result has been done", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject({
        error: "Something bad happened"
      })
    );

    const expectedActions = [
      { type: "GET_DATA_START" },
      { type: "GET_DATA_FAILURE", error: { error: "Something bad happened" } }
    ];

    await store.dispatch(actions.getData());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
