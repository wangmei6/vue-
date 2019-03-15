<template>
   <div>
      <div class="box">
      <p>{{msg}}</p>
         <div class="swiper-container">
            <div class="swiper-wrapper">
               <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                  <ul>
                     <li class="item">
                        <div class="item-img">
                           <img :src="item.img | replaceWH('85.115')" alt="">
                           <span class="wish-bg"></span>
                           <span class="wish">
                              <span>{{item.wish}}</span>人想看
                           </span>
                        </div>
                        <h5>{{item.nm}}</h5>
                        <p>{{item.comingTitle}}</p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Filter from '../../../js/filter/filter.js'
import Vue from 'vue'
export default {
   name:'comingSoonSwiper',
   data(){
      return{
         msg:'近期最受期待',
         list:[]
      }
   },
   methods:{
      initSwiper(){
         let url = '/my/ajax/mostExpected?ci=1&limit=10&offset=0&token='+new Date().getTime()
         this.$axios.get(url)
         .then((res)=>{
            console.log(res.data.coming)
            this.list=res.data.coming
            Vue.nextTick(()=>{
               var swiper = new Swiper('.swiper-container', {
                  slidesPerView: 3, //每页显示多少
                  // spaceBetween: 30, //两个距离多少
               });
            })
         })
      }
   },
   mounted(){
      this.initSwiper()
   }
}
</script>

<style lang="scss" scoped>
$sc:25;
.box{
   padding: 12/$sc+rem 0 12/$sc+rem 15/$sc+rem;
   background-color: #fff;
   margin-bottom: 10/$sc+rem;
   p{
      margin: 0 0 12/$sc+rem;
      font-size: 14/$sc+rem;
      color: #333;
   }
   .swiper-slide{
      display: inline-block;
      overflow: hidden;
      // margin-right: 10/$sc+rem;
      .item{
         // text-overflow: ellipsis;
         // overflow: hidden;
         // white-space: nowrap;
            //  display: inline-block;
         width: 85/$sc+rem;
         overflow: hidden;
         margin-right: 10/$sc+rem;
         .item-img{
            width: 85/$sc+rem;
            height: 115/$sc+rem;
            position: relative;
            margin-bottom: 6/$sc+rem;
            img{
               width: 100%;
               height: 100%;
            }
            .wish-bg{
               display: inline-block;
               height: 35/$sc+rem;
               left:0;
               width: 100%;
               position: absolute;
               bottom: 0;
               background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
            }
            .wish{
               position: absolute;
               left: 4/$sc+rem;
               bottom: 2/$sc+rem;
               color: #faaf00;
               font-size: 11/$sc+rem;
               font-weight: 600;
            }
         }
         h5{
            margin: 0 0 3/$sc+rem;
            font-size: 10/$sc+rem;
            color: #222;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
         }
         p{
            margin: 0;
            font-size: 12/$sc+rem;
            color: #999;
         }
      }
   }
}


</style>

