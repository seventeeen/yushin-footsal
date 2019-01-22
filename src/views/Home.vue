<template>
  <div class="home">
    <div>여기가 홈입니다</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="유신 어학반 풋살 포럼 ^^"/>
    <HelloWorld msg="여기는 다른 페이지입니다"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
