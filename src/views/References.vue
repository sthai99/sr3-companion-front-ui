<template>
    <div>
        <h1>Reference tables</h1>
        <div>
            <router-link :to="{ name: ROUTE_NAME.ATTRIBUTES }">Attributes</router-link> |
            <router-link :to="{ name: ROUTE_NAME.SKILLS }">Skills</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ROUTE_NAME from '@/router/route-names';

export default defineComponent({
  setup() {
    return {
      ROUTE_NAME,
    };
  },
});
</script>
