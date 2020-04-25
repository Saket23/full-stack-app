//@flow

import axios from "axios";

function start(): any {
  return {
    type: "GET_DETAILS_START"
  };
}

function success(data): any {
  return {
    type: "GET_DETAILS_SUCCESS",
    data
  };
}

function failure(error): any {
  return {
    type: "GET_DETAILS_FAILURE",
    error
  };
}

function getDataUrl(id: number): any {
  return axios.get(`https://fast-inlet-11336.herokuapp.com/customer/${id}`);
}

export function getData(id: number): any {
  return (dispatch: any) => {
    dispatch(start());
    return getDataUrl(id)
      .then(response => {
        dispatch(success(response.data.results));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}
