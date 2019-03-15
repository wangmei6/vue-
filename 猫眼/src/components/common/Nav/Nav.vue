<template>
   <div>
      <h4>猫眼电影</h4>
   </div>
</template>

<script>
export default {
   name:'tab'
}
</script>

<style lang="scss" scoped>
$sc:25;
   div{
      height: 50/$sc+rem;
      line-height: 50/$sc+rem;
      background: #e54847;
      h4{
         font-size: 18/$sc+rem;
         font-weight: 400;
         text-align: center;
         line-height: 50/$sc+rem;
         text-overflow: ellipsis;
         white-space: nowrap;
         overflow: hidden;
         color: #fff;
      }
   }
</style>
