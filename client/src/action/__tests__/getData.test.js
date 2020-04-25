import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../getData";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockBody = [
  {
    customer_id: 1,
    customer_name: "john",
    age: 23,
    gender: "male"
  },
  {
    customer_id: 2,
    customer_name: "david",
    age: 24,
    gender: "male"
  },
  {
    customer_id: 3,
    customer_name: "meera",
    age: 23,
    gender: "female"
  },
  {
    customer_id: 4,
    customer_name: "priya",
    age: 24,
    gender: "female"
  },
  {
    customer_id: 5,
    customer_name: "raj",
    age: 25,
    gender: "male"
  },
  {
    customer_id: 6,
    customer_name: "rahul",
    age: 27,
    gender: "male"
  },
  {
    customer_id: 7,
    customer_name: "kabir",
    age: 23,
    gender: "male"
  },
  {
    customer_id: 8,
    customer_name: "preeti",
    age: 23,
    gender: "female"
  },
  {
    customer_id: 9,
    customer_name: "madhuri",
    age: 26,
    gender: "female"
  },
  {
    customer_id: 10,
    customer_name: "vishal",
    age: 23,
    gender: "male"
  }
];

describe("getData", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates GET_DATA_START when fetching result has been done", () => {
    fetchMock.getOnce("https://fast-inlet-11336.herokuapp.com/customer", {
      body: mockBody,
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: "GET_DATA_START" },
      { type: "GET_DATA_SUCCESS", data: mockBody }
    ];
    const store = mockStore({ results: [] });
    return store.dispatch(actions.getData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
