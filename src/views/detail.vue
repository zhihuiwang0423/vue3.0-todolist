<template>
  <div class="wrap">
    <nav-header @addList="addListFn"></nav-header>
    <nav-main :list = 'list' @delList="delListFn"></nav-main>
    <nav-footer :list = 'list' @delAllList ="delAllListFn"></nav-footer>
  </div>
</template>
<script>
import NavHeader from "@/components/navHeader/navHeader";
import NavMain from "@/components/navMain/navMain";
import NavFooter from "@/components/navFooter/navFooter";
import { defineComponent,computed } from "vue";
import {useStore} from 'vuex'
// computed 计算属性
export default defineComponent({
  name: "home",
  components: {
    // 当key,value相等的情况下，NavHeader:NavHeader,省略成NavHeader
    NavHeader,
    NavMain,
    NavFooter,
  },

  setup(props, ctx) {
    let store = useStore()
    let list = computed(()=>{
      console.log(store.state.dataList)
      localStorage.setItem('localData',store.state.dataList)
      return store.state.dataList
    })
    let addListFn=(val)=>{
      let flag = true
      list.value.map((item,index)=>{
        if(item.title == val){
          flag = false
          alert('数据已存在')
          return
        }
      })
      flag && 
      store.commit('addOption',{title:val, complete:false})
    }
    let delListFn=(val)=>{
      store.commit('delOption',val)
    }
    let delAllListFn=(val)=>{
      console.log(val)
      store.commit('delAllOption',val)
    }
    return {
      list,
      addListFn,
      delListFn,
      delAllListFn
    };
  },
});
</script>
<style scoped lang="scss">
.wrap{
  width:300px;
  margin:0 auto;
  background:#FAFAFA;
  padding:30px;
}
</style>