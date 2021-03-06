//@flow

type StateType = {
  isLoading: boolean,
  data: any,
  error: ?string
};

export const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export default function storeData(
  state: StateType = initialState,
  action: any
) {
  switch (action.type) {
    case "GET_DETAILS_START":
      return { ...state, isLoading: true };
    case "GET_DETAILS_SUCCESS":
      return { ...state, isLoading: false, data: action.data };
    case "GET_DETAILS_FAILURE":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
