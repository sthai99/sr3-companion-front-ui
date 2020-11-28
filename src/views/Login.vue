<template>
  <section id="firebaseui-auth-container"></section>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const initFirebaseAuthUi = () => {
      const auth = firebase.auth();
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(auth);
      }
      const uiConfig = {
        signInOptions: [{
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          forceSameDevice: false,
        }],
      };
      ui.start('#firebaseui-auth-container', uiConfig);
    };

    onMounted(initFirebaseAuthUi);

    return {
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './../../node_modules/firebaseui/dist/firebaseui.css';
</style>
