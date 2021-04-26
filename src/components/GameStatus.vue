<template>
  <div class="status">
    <p v-if="gameIsTied">
      The game is currently tied
    </p>
    <p v-else>
      {{ gameLeaderDisplay }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["team1", "team2"],
  computed: {
    gameIsTied() {
      return this.$props.team1.score === this.$props.team2.score;
    },
    gameLeaderDisplay() {
      const { team1, team2 } = this.$props;
      const leadingTeam = team1.score > team2.score ? team1 : team2;
      const lead = Math.abs(team1.score - team2.score);
      const points = lead === 1 ? "point" : "points";
      return `${leadingTeam.name} is leading by ${lead} ${points}`;
    }
  }
};
</script>

<style></style>
