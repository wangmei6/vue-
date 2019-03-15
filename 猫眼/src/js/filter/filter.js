import Vue from 'vue'

Vue.filter('replaceWH',(val,wh)=>{
   return val.replace('w.h',wh)
})
