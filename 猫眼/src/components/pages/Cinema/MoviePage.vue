<template>
   <div>
   <div class="wrapper" ref="wrapper">
      <div class="content">
          <div class="movie-title">
            <div class="contxt">
               <div class="img">
                  <img :src="list.img | replaceWH('120.130')" alt="">
               </div>
               <div class="content">
                  <div class="title">{{list.nm}}</div>
                  <div class="score">{{list.enm}}</div>
                  <div>
                     <span class="title-sc">{{list.sc || '暂无评分'}}</span>
                     <span class="score">({{(list.snum/10000).toFixed(1)}}万人评分)</span>
                  </div>
                  <div class="score">{{list.cat}}</div>
                  <div class="score">{{list.oriLang}}/{{list.dur}}</div>
                  <div class="score">{{list.pubDesc}}</div>
               </div>
            </div>
         </div>
         <h3 style="color:red">认识一下 我叫小饼干</h3>
         <p>下次再见<span style="color:red">我会优化的 </span>嘻嘻</p>
      </div>
   </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
import  '../../../js/filter/filter.js'

export default {
   name:'moviePage',
   data() {
      return {
         list:[]
      }
   },
   created() {
      var id = this.$route.params.id
      let url = '/my/ajax/detailmovie?movieId='+id
      this.$axios.get(url)
      .then((res)=>{
         console.log(res)
         this.list = res.data.detailMovie
         this.$nextTick(()=>{
            let wrapper  = this.$refs.wrapper
            new BScroll(wrapper,{
               click:true,
               probeType:2
            })
         })
      })
   },
   mounted(){
      
   },
}
</script>

<style lang="scss" scoped>
$sc:25;
.wrapper{
   background:#f5f5f5;
   position: fixed;
   top:52/$sc+rem;
   left:0;
   bottom: 48/$sc+rem;
   right: 0;
   overflow: hidden;
   .movie-title{
      height: 188/$sc+rem;
      position: relative;
      cursor: pointer;
      // display: flex;
      background: red;
      .contxt{
         height: 150/$sc+rem;
         padding: 19/$sc+rem 30/$sc+rem 19/$sc+rem 15/$sc+rem;
         .img{
            float: left;
            width: 110/$sc+rem;
            height: 150/$sc+rem;
            img{
               width: 100%;
               height: 100%;
            }
         }
         .content{
            // overflow-x: hidden;
            margin-left: 12.5/$sc+rem;
            line-height: 1;
            margin-left: 130/$sc+rem;
            color: #fff;
            .title{
               font-size: 20/$sc+rem;
               margin-top: 2/$sc+rem;
               font-weight: 700;
               overflow: hidden;
            }
            .score{
               margin-top: 10/$sc+rem;
               font-size: 12/$sc+rem;
               color: #fff;
               opacity: .8;
            }
            .title-sc{
               font-size: 18/$sc+rem;
               font-weight: 700;
               color: #fc0;
               margin-top: 11/$sc+rem;
            }
         }
      } 
   }
}

</style>
