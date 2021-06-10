<template>
  <div class="wrap">
    <nav-header @addList="addListFn"></nav-header>
    <nav-main
      :list="list"
      @delList="delListFn"
      @checkboxFn="checkboxFn"
    ></nav-main>
    <nav-footer :list="list" @delAllList="delAllListFn"></nav-footer>
  </div>
</template>
<script>
import NavHeader from "@/components/navHeader/navHeader";
import NavMain from "@/components/navMain/navMain";
import NavFooter from "@/components/navFooter/navFooter";
import { defineComponent, computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import {ElMessage } from 'element-plus'
// computed 计算属性
export default defineComponent({
  name: "home",
  components: {
    // 当key,value相等的情况下，NavHeader:NavHeader,省略成NavHeader
    NavHeader,
    NavMain,
    NavFooter,
    ElMessage
  },

  setup(props, ctx) {
    console.log(ctx);
    let store = useStore();
    let getLocalDataFn = () => {
      let data = localStorage.getItem("localData");
      console.log(data);
      if (data != null) {
        return JSON.parse(data);
      } else {
        return [];
      }
    };
    let list = computed(() => {
      if (getLocalDataFn().length) {
        store.commit("setDataList", getLocalDataFn());
      }
      return store.state.dataList;
    });

    let addListFn = (val) => {
      let flag = true;
      list.value.map((item, index) => {
        if (item.title == val) {
          flag = false;
          // alert("数据已存在");
         ElMessage.success('数据已存在');
          return;
        }
      });
      flag && store.commit("addOption", { title: val, complete: false });
      store.commit("saveLocalData", JSON.stringify(store.state.dataList));
    };
    let delListFn = (val) => {
      store.commit("delOption", val);
      store.commit("saveLocalData", JSON.stringify(store.state.dataList));
    };
    let delAllListFn = (val) => {
      console.log(val);
      store.commit("delAllOption", val);
      store.commit("saveLocalData", JSON.stringify(val));
    };
    let checkboxFn = () => {
      store.commit("saveLocalData", JSON.stringify(store.state.dataList));
    };
    return {
      list,
      addListFn,
      delListFn,
      delAllListFn,
      getLocalDataFn,
      checkboxFn,
    };
  },
});
</script>
<style scoped lang="scss">
.wrap {
  width: 300px;
  margin: 0 auto;
  background: #fafafa;
  padding: 30px;
}
</style>