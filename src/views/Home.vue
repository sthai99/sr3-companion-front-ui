<template>
  <div class="home">
    <CharacterSheet/>
  </div>
</template>

<script lang="ts">
import CharacterSheet from '@/components/CharacterSheet.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    CharacterSheet,
  },
});
</script>
