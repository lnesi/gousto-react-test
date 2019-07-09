import React from "react";
import { shallow, mount } from "enzyme";
import ProductTile from "../ProductTile";
const testData = {
  id: "0009468c-33e9-11e7-b485-02859a19531d",
  sku: "AP-ACH-WIN-WHI-23-P",
  title: "Borsao Macabeo",
  description:
    "A flavoursome Summer wine made from the indigenous Macabeo grape in northern Spain. A balanced, modern white with flavours of ripe peach, zesty lemon and nutty undertones, it leaves the palate with a clean and fruity finish.",
  list_price: "6.95",
  is_vatable: true,
  is_for_sale: true,
  age_restricted: true,
  box_limit: 2,
  always_on_menu: false,
  volume: null,
  zone: null,
  created_at: "2017-05-08T13:22:27+01:00",
  categories: [
    {
      id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
      title: "Drinks Cabinet",
      box_limit: 7,
      is_default: false,
      recently_added: false,
      hidden: false,
      pivot: {
        created_at: "2017-05-08T13:22:46+01:00"
      }
    },
    {
      id: "785741fc-3854-11e6-87a5-06f9522b85fb",
      title: "Large Alcohol",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: true,
      pivot: {
        created_at: "2017-05-08T13:22:46+01:00"
      }
    }
  ],
  tags: [],
  images: {
    "365": {
      src:
        "https://production-media.gousto.co.uk/cms/product-image-landscape/YAddOns-WhiteWines-Borsao_013244-x400.jpg",
      url:
        "https://production-media.gousto.co.uk/cms/product-image-landscape/YAddOns-WhiteWines-Borsao_013244-x400.jpg",
      width: 400
    }
  }
};

describe("ProductTile", () => {
  let wrapper = null;

  it("Renders without crashing the conrrect Block Element (.ProductTile)", () => {
    wrapper = shallow(<ProductTile {...testData} />);
    expect(wrapper.hasClass("ProductTile")).toBe(true);
  });

  describe("AC", () => {
    beforeEach(() => {
      wrapper = mount(<ProductTile {...testData} />);
    });

    it("has a image ", () => {
      expect(wrapper.find("img").length).toEqual(1);
      expect(wrapper.find("img").prop("src")).toEqual(
        testData.images["365"].src
      );
      expect(wrapper.find("img").prop("alt")).toEqual(testData.title);
    });
    it("has a title ", () => {
      expect(wrapper.find(".title").length).toEqual(1);
      expect(wrapper.find(".title").text()).toEqual(testData.title);
    });

    it("has a description ", () => {
      expect(wrapper.find(".description").length).toEqual(1);
      expect(wrapper.find(".description").text()).toEqual(testData.description);
    });

    it("has a price ", () => {
      expect(wrapper.find(".price").length).toEqual(1);
      expect(wrapper.find(".price").text()).toEqual(testData.list_price);
    });

    it("is description hidden", () => {
      expect(wrapper.find(".description").hasClass("hidden")).toBe(true);
    });

    it("click on title will show description", () => {
      wrapper.find(".title").simulate("click");
      expect(wrapper.find(".description").hasClass("hidden")).toBe(false);
    });
    afterAll(() => {
      wrapper.unomunt();
    });
  });
});
