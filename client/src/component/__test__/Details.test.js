//@flow

import React from "react";
import { shallow } from "enzyme";
import { Details } from "../Details";
import { Title, Data } from "../styles/details";

const mockData = [
  {
    customer_name: "john",
    address: "3999  Richland Avenue,Tomball,TX,Texas"
  }
];

describe("Details", () => {
  let Wrapper, props;
  beforeEach(() => {
    props = {
      data: mockData,
      getData: jest.fn(),
      isDataLoaded: true,
      match: {
        params: {
          customerId: 1
        }
      }
    };
    Wrapper = shallow(<Details {...props} />);
  });

  describe("isDataLoaded is true", () => {
    it("should render Title and Data", () => {
      expect(Wrapper.find(Title).length).toBe(1);
      expect(Wrapper.find(Data).length).toBe(1);
    });
  });

  describe("isDataLoaded is false", () => {
    it("should not render Title and Data", () => {
      const newWrapper = shallow(<Details {...props} isDataLoaded={false} />);
      expect(newWrapper.find(Data).length).toBe(0);
      expect(newWrapper.find(Data).length).toBe(0);
    });
  });
});
