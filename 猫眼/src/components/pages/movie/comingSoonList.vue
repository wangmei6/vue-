<template>
   <div>
      <div class="List">
         <div class="item">
            <ul>
               <li v-for='(item,index) in list' :key="index">
                  <div>
                     <p v-if="index===0 || index!==0 && item.comingTitle !== list[index-1].comingTitle">{{item.comingTitle}}</p>
                     <div class="item-List">
                        <div class="item-img" style="float:left"> 
                           <img :src="item.img | replaceWH('64.90')" alt="">
                        </div>
                        <div class="main">
                           <div class="mtitle">{{item.nm}}</div>
                           <div v-if='item.sc'>
                              <span class="people">观众评</span> 
                              <span class="score">{{item.sc}}</span>
                           </div>
                           <div v-else>
                              <span class="wish">{{item.wish || '暂无'}}</span><span>人想看</span>
                           </div>
                           <div class="actor">主演:{{item.star || '暂无主演信息'}}</div>
                           <div class="actor">{{item.showInfo || '暂无'}}</div>
                        </div>
                           <div class="buy" v-if='item.sc'><span>预售</span></div>
                           <div class="willbuy" v-else><span>想看</span></div>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script>
import '../../../js/filter/filter.js'
export default {
   name:'commingSoonList',
   data() {
      return {
         list:[]
      }
   },
   methods: {
      initList(){
         let url = '/my/ajax/comingList?ci=1&token=&limit=10'
         this.$axios.get(url)
         .then((res)=>{
            console.log(res.data.coming)
            this.list = res.data.coming
         })
      }
   },
   mounted() {
      this.initList()
   },
} 
</script>

<style lang="scss" scoped>
$sc:25;
.item{
   ul{
      li{
         padding-left: 15/$sc+rem;
         background-color: #fff;
         p{
            padding: 12/$sc+rem 15/$sc+rem 0;
            margin: 0;
            font-size: 14/$sc+rem;
            color: #333;
         }
         .item-List{
            padding: 12/$sc+rem 14/$sc+rem 12/$sc+rem 0;
            margin-left: 14/$sc+rem;
            height: 90/$sc+rem;
            position: relative;
         }
         .main{
            padding-right: 5/$sc+rem;
            margin-left: 74/$sc+rem;
            overflow: hidden;
            .mtitle{
               font-size: 17/$sc+rem;
               color: #333;
               // font-weight: 700;
               padding-right: 5/$sc+rem;
               // flex-shrink: 1;
            }
            .wish{
               color: #faaf00;
               font-size: 15/$sc+rem;
               font-weight: 600;
            }
            span{
               font-size: 13/$sc+rem;
               display: inline-block;
               color: #666;
            }
            .actor{
               font-size: 13/$sc+rem;
               color: #666;
               text-overflow: ellipsis;
               overflow: hidden;
               white-space: nowrap
            }
         }
         .willbuy{
            width: 47/$sc+rem;
            height: 27/$sc+rem;
            line-height: 28/$sc+rem;
            text-align: center;
            box-sizing: border-box;
            background-color: #3c9fe6;
            color: #fff;
            border-radius: 4px;
            white-space: nowrap;
            font-size: 12/$sc+rem;
            cursor: pointer;
            position: absolute;
            right: 14/$sc+rem;
            top: 0;
            bottom: 0;
            height: 27/$sc+rem;
            margin: auto;
            span{
               color: #fff;
            }
         }
         .buy{
            width: 47/$sc+rem;
            height: 27/$sc+rem;
            line-height: 28/$sc+rem;
            text-align: center;
            box-sizing: border-box;
            background-color: #faaf00;
            color: #fff;
            border-radius: 4px;
            white-space: nowrap;
            font-size: 12/$sc+rem;
            cursor: pointer;
            position: absolute;
            right: 14/$sc+rem;
            top: 0;
            bottom: 0;
            height: 27/$sc+rem;
            margin: auto;
            span{
               color: #fff;
            }
         }
      }
   }
}
</style>
