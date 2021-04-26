<template>
  <h1>
    <span :class="{ winning: team1.score > team2.score }">{{
      team1.name
    }}</span>
    vs
    <span :class="{ winning: team2.score > team1.score }">{{
      team2.name
    }}</span>
  </h1>
</template>

<script>
export default {
  props: ["team1", "team2"]
};
</script>

<style>
h1 {
  font-size: 12ex;
}
.winning {
  color: purple;
}
</style>
