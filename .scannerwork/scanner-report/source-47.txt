import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../utils/index";

import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Banner from "../Banner";
import Hero from "../Hero";
import Loading from "../Loading";
import Title from "../Title";

Enzyme.configure({
    adapter: new Adapter(),
  });

// describe("Banner", () => {
//   describe("Banner test", () => {
//     let wrapper;
//     beforeEach(() => {
//       const props = {
      
//       };
//       wrapper = shallow(<Banner {...props} />);
//     });

//     it("should render banner", () => {
//       const bannerComponent = findByTestAtrr(wrapper, "banner");
//       expect(bannerComponent.length).toBe(1);
//     });
//   });
// });


describe("Hero", () => {
  describe("Hero test", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
      
      };
      wrapper = shallow(<Hero {...props} />);
    });

    it("should render Hero", () => {
      const bannerComponent = findByTestAtrr(wrapper, "hero");
      expect(bannerComponent.length).toBe(1);
    });
  });
});




describe("Hero", () => {
  describe("Hero test", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
      
      };
      wrapper = shallow(<Loading {...props} />);
    });

    it("should render Hero", () => {
      const bannerComponent = findByTestAtrr(wrapper, "loading");
      expect(bannerComponent.length).toBe(1);
    });
  });
});





// describe("Hero", () => {
//   describe("Hero test", () => {
//     let wrapper;
//     beforeEach(() => {
//       const props = {
      
//       };
//       wrapper = shallow(<Title {...props} />);
//     });

//     it("should render Hero", () => {
//       const bannerComponent = findByTestAtrr(wrapper, "title");
//       expect(bannerComponent.length).toBe(1);
//     });
//   });
// });

