<template>
  <div class="characters">
    <h1>Welcome {{displayName}}</h1>
    <div id="character-list">
      <ol>
        <li v-for="character in characters" v-bind:key="character">
          {{ character.id }} - {{ character.name }} / Race : {{ character.race }}
        </li>
      </ol>
    </div>
    <button @click="signoutButtonPressed">Logout</button>
  </div>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const signoutButtonPressed = () => {
      firebase.auth().signOut();
    };

    return {
      displayName: computed(() => store.state.user?.displayName),
      characters: computed(() => store.state.characters),
      signoutButtonPressed,
    };
  },
});
</script>
