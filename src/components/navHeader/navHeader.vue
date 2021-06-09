<template>
  <div class="search">
    <el-input
      placeholder="请输入任务名称"
      v-model="searchVal"
      @keydown.enter="searchFn"
    />
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "navHeader",
  setup(props, ctx) {
    let searchVal = ref("");

    let searchFn = () => {
      ctx.emit("addList", searchVal.value);
      searchVal.value = "";
    };
    return {
      searchVal,
      searchFn,
    };
  },
});
</script>
<style scoped lang="scss">
.search {
  input {
    width: 100%;
  }
}
</style>