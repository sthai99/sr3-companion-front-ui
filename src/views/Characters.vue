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
import { Options, Vue } from 'vue-class-component';
import firebase from 'firebase/app';
import ActionTypes from '@/store/action-types';
import Character from '@/store/models/character';

@Options({})
export default class Characters extends Vue {
  get displayName(): string {
    return `${this.$store.state.user?.displayName}`;
  }

  get characters(): Array<Character> {
    return this.$store.state.characters;
  }

  signoutButtonPressed() {
    firebase.auth().signOut();
  }
}
</script>
