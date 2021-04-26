<template>
  <span class="box">
    <soan class="score">
      <break>
        {{ score }}
      </break>
    </soan>
    <span class="actions">
      <button class="button button-minus" @click="subtractPoint">-</button>
      <button class="button button-add" @click="addPoint">+</button>
    </span>
  </span>
</template>

<script>
export default {
  props: ["score"],
  methods: {
    addPoint() {
      this.$emit("pointAdded");
    },
    subtractPoint() {
      this.$emit("pointSubtracted");
    }
  }
};
</script>

<style>
.button-add {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 20px;
  color: blue;
  border-radius: 50%;
  height: 20px;
  width: 100%;
  height: 100%;
}

.button-minus {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 20px;
  color: blue;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
