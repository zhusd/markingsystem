<template>
  <div id="app">
    <Head></Head>
    <router-view><router-view/>
  </div>
</template>

<script>
import Head from './components/HeadPage'

export default {
  name: 'App',
  components:{
    Head
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f3f3f3;
  font-size: 14px;
}
</style>
