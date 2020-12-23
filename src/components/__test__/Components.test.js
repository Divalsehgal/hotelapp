import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../utils/index";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Banner from "../Banner";

Enzyme.configure({
    adapter: new Adapter(),
  });

describe("Banner", () => {
  describe("Banner test", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
      
      };
      wrapper = shallow(<Banner {...props} />);
    });

    it("should render banner", () => {
      const bannerComponent = findByTestAtrr(wrapper, "banner");
      expect(bannerComponent.length).toBe(1);
    });
  });
});