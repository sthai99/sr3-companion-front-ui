<template>
  <div class="sr3-box">
    <div class="sr3-box-title">{{ title }}</div>
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/main';
.sr3-box-title {
  @extend .has-background-grey-lighter;
  @extend .has-text-dark;
  position: relative;
  top: 1em;
  left: 1em;
  width: fit-content;
  padding: 0em 1em;
}
</style>
