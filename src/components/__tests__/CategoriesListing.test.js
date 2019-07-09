import React from "react";
import { shallow, mount } from "enzyme";
import CategoriesListing from "../CategoriesListing.js";
import { MemoryRouter } from "react-router-dom";

const testData = {
  loaded: true,
  loading: false,
  list: [
    {
      id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
      title: "Drinks Cabinet",
      box_limit: 7,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "529ea59e-bf7e-11e5-840e-02fada0dd3b9",
      title: "Kitchenware",
      box_limit: 6,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "fec10d0e-bf7d-11e5-90a9-02fada0dd3b9",
      title: "Desserts",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: false
    }
  ]
};

describe("CategoriesListing", () => {
  let wrapper = null;

  it("Renders without crashing the conrrect Block Element (.CategoriesListing)", () => {
    wrapper = shallow(<CategoriesListing {...testData} />);
    expect(wrapper.hasClass("CategoriesListing")).toBe(true);
  });

  describe("AC", () => {
    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter>
          <CategoriesListing {...testData} />
        </MemoryRouter>
      );
    });
    it("renders a list", () => {
      expect(wrapper.find(".list-group").length).toEqual(1);
    });

    it("renders the correct amount of entries", () => {
      expect(wrapper.find("Link").length).toEqual(3);
      expect(wrapper.find(".list-group-item").hostNodes().length).toEqual(3);
    });

    it("renders the correct content", () => {
      expect(
        wrapper
          .find(".list-group-item")
          .first()
          .text()
      ).toEqual("Drinks Cabinet");
    });

    it("renders the correct link", () => {
      expect(
        wrapper
          .find("Link")
          .first()
          .props().to
      ).toEqual("drinks-cabinet");
    });
    afterAll(() => {
      wrapper.unomunt();
    });
  });
});
