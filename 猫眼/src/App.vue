<template>
  <div id="app">
    <Nav></Nav>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from './components/common/Nav/Nav'
import Foot from './components/common/fotter/fotter'
export default {
  name: 'App',
  components:{
    Nav,
    Foot
  }
}
</script>

<style lang="scss" scoped>

</style>

