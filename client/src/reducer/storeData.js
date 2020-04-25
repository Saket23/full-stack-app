//@flow

type StateType = {
  isLoading: boolean,
  data: any,
  error: ?string
};

const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export default function storeData(
  state: StateType = initialState,
  action: any
) {
  switch (action.type) {
    case "GET_DATA_START":
      return { ...state, isLoading: true };
    case "GET_DATA_SUCCESS":
      return { ...state, isLoading: false, data: action.data };
    case "GET_DATA_FAILURE":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
