<template>
  <div id="app">
    <div id="team">
      <matchup-title :team1="team1" :team2="team2"></matchup-title>
    </div>
    <game-status :team1="team1" :team2="team2"></game-status>
    <div class="scores">
      <scorecard
        :score="team1.score"
        @pointAdded="updateTeamScore(team1, 1)"
        @pointSubtracted="updateTeamScore(team1, -1)"
      ></scorecard>
      <scorecard
        :score="team2.score"
        @pointAdded="updateTeamScore(team2, 1)"
        @pointSubtracted="updateTeamScore(team2, -1)"
      ></scorecard>
    </div>
  </div>
</template>

<script>
import GameStatus from "./components/GameStatus.vue";
import MatchupTitle from "./components/MatchupTitle.vue";
import Scorecard from "./components/Scorecard.vue";
export default {
  components: { MatchupTitle, Scorecard, GameStatus },
  data() {
    return {
      team1: {
        name: "Team 1",
        score: 0
      },
      team2: {
        name: "Team 2",
        score: 0
      }
    };
  },
  methods: {
    updateTeamScore(team, points) {
      const updated = team.score + points;
      if (updated >= 0) {
        team.score = updated;
      }
    }
  }
};
</script>

<style>
body {
  background-color: blue;
}
#app {
  text-align: center;
  color: white;
}

#team {
  outline: 20px green;
  border: 2px solid black;
}

.scores {
  display: flex;
  justify-content: space-evenly;
}
</style>
