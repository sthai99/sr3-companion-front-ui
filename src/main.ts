import { createApp } from 'vue';
import 'reflect-metadata';
import firebase from 'firebase/app';
import 'firebase/firestore';
import App from './App.vue';
import router from './router';
import ROUTE_NAME from './router/route-names';
import store from './store';
import ActionTypes from './store/action-types';

require('./assets/main.scss');

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(ActionTypes.CHANGE_USER, user).then(() => {
      router.push({ name: ROUTE_NAME.CHARACTERS });
    });
  } else {
    store.dispatch(ActionTypes.RESET_USER).then(() => {
      router.push({ name: ROUTE_NAME.LOGIN });
    });
  }
});

createApp(App).use(store).use(router).mount('#app');
