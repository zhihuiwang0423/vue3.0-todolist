<template>
  <div v-if="listTrans.length">
    <ul v-for="(item, index) in listTrans" :key="index">
      <li class="list">
        <el-checkbox v-model="item.complete" @change="checkboxFn">
        <span>{{ item.title }}</span>
        </el-checkbox>
        <el-button
          class="del"
          @click="delFn(item, index)"
          type="primary"
          size="mini"
          >删除</el-button
        >
      </li>
    </ul>
  </div>
  <div v-else class="none">暂无数据</div>
  <div></div>
</template>
<script>
import { defineComponent, ref,computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "navMain",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  emits: ["delList","checkboxFn"],
  setup(props, ctx) {
    let listTrans = computed(()=>{
      return props.list
    });
    let checkboxFn=()=>{
      ctx.emit('checkboxFn')
    }
    let delFn = (item, index) => {
      ctx.emit("delList", index);
      //
    };
    return {
      delFn,
      listTrans,
      checkboxFn
    };
  },
});
</script>

<style scoped lang="scss">
ul {
  padding: 0;
  width: 100%;
}
ul li {
  list-style: none;
}
.list {
  position: relative;
  text-align: left;
  padding: 15px;
  span {
    margin: 0 10px;
  }
  .hide {
    display: none;
  }
  button {
    display: none;
    position: absolute;
    right: 5px;
  }
  &:hover {
    cursor: pointer;
    color: #40b7fe;
    background: #f5f7fa;
    .del {
      display: inline-block;
    }
  }
}
.none {
  margin: 10px auto;
}
</style>