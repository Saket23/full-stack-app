//@flow

import axios from "axios";
import type { CustomerData } from "../type";

export function start(): any {
  return {
    type: "GET_DATA_START"
  };
}

export function success(data: CustomerData[]): any {
  return {
    type: "GET_DATA_SUCCESS",
    data
  };
}

export function failure(error: any): any {
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
        dispatch(success(response.data.results));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}
