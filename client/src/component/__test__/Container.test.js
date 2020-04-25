//@flow

import React from "react";
import { shallow } from "enzyme";
import { Container } from "../index";
import { TitleWrapper, StyledLink } from "../styles";

const mockData = [
  {
    customer_id: 1,
    customer_name: "john",
    age: 23,
    gender: "male"
  }
];

describe("Container", () => {
  let Wrapper, props;
  beforeEach(() => {
    props = {
      data: mockData,
      getData: jest.fn(),
      isDataLoaded: true
    };
    Wrapper = shallow(<Container {...props} />);
  });

  describe("isDataLoaded is true", () => {
    it("should render TitleWrapper and StyledLink", () => {
      expect(Wrapper.find(TitleWrapper).length).toBe(1);
      expect(Wrapper.find(StyledLink).length).toBe(1);
    });
  });

  describe("isDataLoaded is false", () => {
    it("should not render TitleWrapper and StyledLink", () => {
      const newWrapper = shallow(<Container {...props} isDataLoaded={false} />);
      expect(newWrapper.find(TitleWrapper).length).toBe(0);
      expect(newWrapper.find(StyledLink).length).toBe(0);
    });
  });
});
