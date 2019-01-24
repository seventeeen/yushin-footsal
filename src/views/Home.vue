<template>
  <div class="home">
    <img alt="asdf" v-for="photo in photos" :src="photo.url" :key="photo.name"/>
    <HelloWorld msg="유신 어학반 풋살 포ㅋ럼ㅋ ^^;;;;;;;;"/>
    <HelloWorld msg="여기는 다른 페이지입니다"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { db } from '@/firebase.js'

// console.log(db.collection('photos'))

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      photos: []
    }
  },
  firestore () {
    return {
      photos: db.collection('photos')
    }
  }
}
</script>
