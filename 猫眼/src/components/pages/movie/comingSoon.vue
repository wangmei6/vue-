<template>
   <div>
      <div class="wrapper" ref="wrapper">
         <div class="content">
            <Swiper></Swiper>
            <List></List>
         </div>
      </div>
   </div>
</template>

<script>
import Swiper from './comingSoonSwiper'
import List from './comingSoonList'
import BScroll from 'better-scroll'

export default {
   name:'comingSoon',
   components:{
      Swiper,
      List
   },
   mounted(){
      let wrapper  = this.$refs.wrapper
      new BScroll(wrapper)
   },
}
</script>

<style lang="scss" scoped>
$sc:25;
.wrapper{
   background:#f5f5f5;
   position: fixed;
   top:94/$sc+rem;
   left:0;
   bottom: 48/$sc+rem;
   right: 0;
   overflow: hidden;
}
</style>

