<template>
  <div class="character-sheet">
    <div class="section">
      <div class="columns is-mobile">
        <div class="column">
          <Sr3Box title="Name" :value="name" />
        </div>
        <div class="column">
          <Sr3Box title="Race" :value="race" />
        </div>
        <div class="column">
          <Sr3Box title="Sex" :value="sex" />
        </div>
        <div class="column">
          <Sr3Box title="Age" :value="age" />
        </div>
      </div>
      <Sr3Box title="Description" :value="description" />
    </div>
    <div class="section">
      <div class="columns is-mobile">
        <div class="column">
          <Sr3Box title="Dice Pools"/>
        </div>
        <div class="column">
          <Sr3Box title="Condition Monitor">
            <div class="columns is-mobile is-gapless">
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
            </div>
          </Sr3Box>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="columns is-mobile">
        <div class="column">
          <Sr3Box title="Attributes">
            <Sr3Box title="plop"/>
          </Sr3Box>
        </div>
        <div class="column">
          <Sr3Box title="Skills"/>
        </div>
        <div class="column">
          <Sr3Box title="Powers"/>
        </div>
        <div class="column">
          <Sr3Box title="Spells"/>
        </div>
      </div>
    </div>
    <div class="section"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sr3Box from './Sr3Box.vue';

export default defineComponent({
  components: {
    Sr3Box,
  },
  setup() {
    return {
      name: 'Mink',
      sex: 'Male',
      age: 24,
      race: 'Human',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ac est nec laoreet. Suspendisse ut odio velit. Vivamus sem ex, tempus a libero convallis, pulvinar efficitur justo. Aliquam erat volutpat. Nunc commodo rutrum elit, ac cursus quam luctus sed. Nam mollis mauris ac scelerisque vestibulum. Phasellus viverra laoreet sapien, a placerat nibh blandit sit amet. Nam pulvinar malesuada elit vel fringilla. Donec fringilla sapien sit amet mi mattis, eget tempus neque euismod. Nam tempor facilisis est vel vulputate. Nam finibus elementum purus eget cursus. Sed non laoreet enim, at tempor massa. Duis consequat finibus mi, in mollis justo elementum in. Donec vulputate diam vitae vestibulum condimentum. Vestibulum tristique, enim quis accumsan mattis, est enim tempus lorem, in fermentum diam lacus quis nulla. Donec pretium elit laoreet velit bibendum hendrerit at vitae dolor.',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
