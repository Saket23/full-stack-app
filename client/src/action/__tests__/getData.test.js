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
  it("creates GET_DATA_SUCCESS when fetching result has been done", () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: mockBody }
      })
    );

    const expectedActions = [
      { type: "GET_DATA_START" },
      { type: "GET_DATA_SUCCESS", data: mockBody }
    ];

    store.dispatch(actions.getData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
