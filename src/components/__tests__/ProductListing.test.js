import React from "react";
import { shallow, mount } from "enzyme";
import ProductListing from "../ProductListing.js";
import { MemoryRouter } from "react-router-dom";

const testData = {
  loaded: true,
  loading: false,
  list: [
    {
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
    },
    {
      id: "00a0130e-bfea-11e7-a2c2-0617e74d8914",
      sku: "AP-FCD-BIS-06",
      title: "Love Shortie All Butter Shortbread",
      description:
        "A rich all butter shortbread, delicately sweet and crumbly with a hint of sea salt, straight out of Scotland. ",
      list_price: "3.95",
      is_vatable: false,
      is_for_sale: true,
      age_restricted: false,
      box_limit: 2,
      always_on_menu: false,
      volume: null,
      zone: null,
      created_at: "2017-11-02T16:22:21+00:00",
      categories: [
        {
          id: "17eb3f8e-bf7e-11e5-ab63-02fada0dd3b9",
          title: "Snacks",
          box_limit: 10,
          is_default: false,
          recently_added: false,
          hidden: false,
          pivot: {
            created_at: "2017-12-29T14:55:56+00:00"
          }
        }
      ],
      tags: [],
      images: {
        "365": {
          src:
            "https://production-media.gousto.co.uk/cms/product-image-landscape/Shortbread-0663-x400.jpg",
          url:
            "https://production-media.gousto.co.uk/cms/product-image-landscape/Shortbread-0663-x400.jpg",
          width: 400
        }
      }
    },
    {
      id: "0126601a-26df-11e8-a736-0239a66a4b36",
      sku: "AP-ACH-WIN-ROS-04-P",
      title: "Domaine de L'Olibet 'Les Pujols' Cinsault Rosé",
      description:
        "A little gem from Saint Georges d’Orques in the south of France. Delicate, sweet spice aromas lead on to a palate of abundant ripe fruit, lifted by a natural zing and finishing with texture and richness. Full of character. 11.5% ABV [France]",
      list_price: "9.95",
      is_vatable: true,
      is_for_sale: false,
      age_restricted: true,
      box_limit: 2,
      always_on_menu: false,
      volume: 0,
      zone: "Ambient",
      created_at: "2018-03-13T16:53:07+00:00",
      categories: [
        {
          id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
          title: "Drinks Cabinet",
          box_limit: 7,
          is_default: false,
          recently_added: false,
          hidden: false,
          pivot: {
            created_at: "2018-03-13T16:54:41+00:00"
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
            created_at: "2018-03-13T16:54:41+00:00"
          }
        }
      ],
      tags: [],
      images: {
        "365": {
          src:
            "https://production-media.gousto.co.uk/cms/product-image-landscape/Domaine-de-LOlibet-Rose_Market-Place0594-x400.jpg",
          url:
            "https://production-media.gousto.co.uk/cms/product-image-landscape/Domaine-de-LOlibet-Rose_Market-Place0594-x400.jpg",
          width: 400
        }
      }
    }
  ]
};

describe("ProductListing", () => {
  let wrapper = null;

  it("Renders without crashing the conrrect Block Element (.ProductListing)", () => {
    wrapper = shallow(<ProductListing {...testData} />);
    expect(wrapper.hasClass("ProductListing")).toBe(true);
  });

  describe("AC", () => {
    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter>
          <ProductListing {...testData} />
        </MemoryRouter>
      );
    });

    it("renders the correct amount of ProductTiles", () => {
      expect(wrapper.find("ProductTile").length).toEqual(3);
    });

    it("handles no results ", () => {
      const newData = { ...testData, list: [] };
      wrapper = mount(
        <MemoryRouter>
          <ProductListing {...newData} />
        </MemoryRouter>
      );
      expect(wrapper.find("ProductTile").length).toEqual(0);
      expect(wrapper.text()).toEqual("No product results found.");
    });
    afterAll(() => {
      wrapper.unomunt();
    });
  });
});
