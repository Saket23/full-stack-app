//@flow

import axios from "axios";

function start(): any {
  return {
    type: "GET_DATA_START"
  };
}

function success(data): any {
  return {
    type: "GET_DATA_SUCCESS",
    data
  };
}

function failure(error): any {
  return {
    type: "GET_DATA_FAILURE",
    error
  };
}

function getDataUrl(): any {
  return axios.get(`https://fast-inlet-11336.herokuapp.com/customer`);
}

export function getData(): any {
  return (dispatch: any) => {
    dispatch(start());
    return getDataUrl()
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}
