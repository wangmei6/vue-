<template>
   <div>
      <ul class="footer">
         <router-link 
         v-for='(item,index) of fotbar' 
         :key="index" 
         tag='li' 
         :to='item.path' 
         active-class='selected'
         >
            {{item.name}}
         </router-link>
      </ul>
      <router-view/>
   </div>
</template>

<script>
export default {
  data(){
    return{
      fotbar:[
        {path:'/movie',name:'电影'},
        {path:'/cinema',name:'影院'},
        {path:'/my',name:'我的'},
      ]
    } 
  },
}
</script>

<style lang="scss" scoped>
$sc:25;
ul{
   position: fixed;
   bottom: 0;
   width: 100%;
   background: #fff;
   border-top: 0.5/$sc+rem solid #d8d8d8;
   display: flex;
   justify-content: space-around;
   li{
      float: left;
      width: 25/$sc+rem;
      height: 48/$sc+rem;
      line-height: 48/$sc+rem;
      box-sizing: border-box;
      color: #696969;
      position: relative;
      text-align: center;
      flex: 1;
   }
   .selected{
      color:red
   }
}
</style>

