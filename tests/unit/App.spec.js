import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("App.vue", () => {
  it("starts both teams with a score of zero", () => {
    const componentWrapper = mount(App);
    const scores = componentWrapper.findAll(".score");

    expect(scores.at(0).text()).toBe("0");
    expect(scores.at(1).text()).toBe("0");
  });
});