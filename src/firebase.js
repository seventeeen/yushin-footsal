import Vue from 'vue'
import firebase from 'firebase/app'
import VueFire from 'vuefire'
import 'firebase/storage'
import 'firebase/firestore'

Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyDdgHxTSYPhqMN377qwdlFo5aV8WaeiGWI',
  authDomain: 'yushin-footsal.firebaseapp.com',
  databaseURL: 'https://yushin-footsal.firebaseio.com',
  projectId: 'yushin-footsal',
  storageBucket: 'yushin-footsal.appspot.com',
  messagingSenderId: '693224129114'
})

export const db = firebase.firestore()

export const storage = firebase.storage()
