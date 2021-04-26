import { mount } from "@vue/test-utils";
import MatchupTitle from "../../src/components/MatchupTitle.vue";

describe("MatchupTitle.vue", () => {
  it("renders both teams' names", () => {
    const componentWrapper = mount(MatchupTitle, {
      propsData: {
        team1: { name: "Team 1", score: 0 },
        team2: { name: "Team 2", score: 0 },
      },
    });

    expect(componentWrapper.text()).toContain("Team 1");
    expect(componentWrapper.text()).toContain("Team 2");
  });
});