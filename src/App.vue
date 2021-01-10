<template>
  <div id="app">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Shadowrun
          </h1>
          <h2 class="subtitle">
            3rd Edition
          </h2>
        </div>
      </div>
    </div>

    <div id="nav">
      <router-link :to="{ name: ROUTE_NAME.HOME }">Home</router-link> |
      <router-link :to="{ name: ROUTE_NAME.CHARACTERS }">Characters</router-link> |
      <router-link :to="{ name: ROUTE_NAME.REFERENCE }">Reference tables</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ROUTE_NAME from './router/route-names';

export default defineComponent({
  setup() {
    return {
      ROUTE_NAME,
    };
  },
});
</script>
