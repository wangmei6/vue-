<template>
   <div>
      <div class="wrapper" ref="wrapper">
         <div class="content">
           <ul>
              <li>
                 <div class="img" v-for="(item,index) in list" :key='index'>
                 <router-link :to='"/cinema/"+item.id'>
                   <div class="item-img">
                        <img :src="item.img | replaceWH('128.180')" alt="">
                    </div>
                     <div class="mright">
                        <div class="main">
                           <div class="mtitle">{{item.nm}}</div>
                           <div v-if='item.sc'>
                              <span class="people">观众评</span> 
                              <span class="score">{{item.sc}}</span>
                           </div>
                           <div v-else>
                              <span class="wish">{{item.wish}}</span><span>人想看</span>
                           </div>
                           <div class="actor">主演:{{item.star || '暂无主演信息'}}</div>
                           <div class="today">{{item.showInfo}}</div>
                        </div>
                           <div class="buy" v-if='item.sc'><span>购票</span></div>
                           <div class="willbuy" v-else><span>预售</span></div>                                      
                     </div>
                 </router-link>
                 </div>
               </li>
           </ul>
         </div> 
      </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
import Filter from '../../../js/filter/filter.js'
export default {
   name:'nowplaying',
   data(){
      return{
         list:[],
      }
   },
   created(){
      var url = '/my/ajax/movieOnInfoList?token='+new Date().getTime()
      this.$axios.get(url)
      .then((res)=>{
         // console.log(res.data.movieList)
         this.list = res.data.movieList
      })
   },
   mounted(){
      let wrapper  = this.$refs.wrapper
         new BScroll(wrapper,{
            click:true,
            probeType:2
         })
   },
}
</script>

<style lang="scss" scoped>
$sc:25;
.wrapper{
   position: fixed;
   top:92/$sc+rem;
   left:0;
   bottom: 48/$sc+rem;
   right: 0;
   overflow: hidden;
   .content{
      padding-left: 15/$sc+rem;
      background-color: #fff;
      .item-img{
         width: 64/$sc+rem;
         height: 90/$sc+rem;
         margin-top: 12/$sc+rem;
         float: left;
         overflow: hidden;
         img{
            width: 100%;
            height: 100%;
         }
      }
   }
   .img{
      font-size: 15/$sc+rem;
      .mright{
         padding: 12/$sc+rem 14/$sc+rem 12/$sc+rem 0;
         margin-left: 74/$sc+rem;
         height: 90/$sc+rem;
         max-height: 90/$sc+rem;
         position: relative;
         .main{
            padding-right: 5/$sc+rem;
            margin-right: 48/$sc+rem;
            overflow: hidden;
            white-space: nowrap;
            .mtitle{
               font-size: 17/$sc+rem;
               color: #333;
               font-weight: 700;
               padding-right: 5/$sc+rem;
               flex-shrink: 1;
            }
            .people {
               font-size: 13/$sc+rem;
               color: #666;
            }
            .actor{
               font-size: 13/$sc+rem;
               color: #666;
               text-overflow: ellipsis;
               overflow: hidden;
               white-space: nowrap;
            }
            .today{
               font-size: 13/$sc+rem;
               color: #666;
               text-overflow: ellipsis;
               overflow: hidden;
               white-space: nowrap;
            }
            .score{
               font-weight: 700;
               color: #faaf00;
               font-size: 15/$sc+rem;
            }
         }
         .buy{
            span{
               width: 47/$sc+rem;
               height: 27/$sc+rem;
               line-height: 28/$sc+rem;
               text-align: center;
               box-sizing: border-box;
               background-color: #f03d37;
               color: #fff;
               border-radius: 4/$sc+rem;
               white-space: nowrap;
               font-size: 12/$sc+rem;
               cursor: pointer;
               font-size: 12/$sc+rem;
               position: absolute;
               right: 14/$sc+rem;
               top: 0;
               bottom: 0;
               height: 27/$sc+rem;
               margin: auto;
            }
         }
         .willbuy{
            span{
               width: 47/$sc+rem;
               height: 27/$sc+rem;
               line-height: 28/$sc+rem;
               text-align: center;
               box-sizing: border-box;
               background-color: #3c9fe6;
               color: #fff;
               border-radius: 4/$sc+rem;
               white-space: nowrap;
               font-size: 12/$sc+rem;
               cursor: pointer;
               font-size: 12/$sc+rem;
               position: absolute;
               right: 14/$sc+rem;
               top: 0;
               bottom: 0;
               height: 27/$sc+rem;
               margin: auto;
            }
         }
         .wish{
            color: #faaf00;
            font-size: 15/$sc+rem;
            font-weight: 600;
         }
      }
   }
}
      


</style>
