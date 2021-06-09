<template>
  <div>我是sub子组件</div>
  <div>{{ msg }}</div>
  <div>
      <button @click="transFn">点我向父组件传值</button>
  </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "subChild",
  props: {
    msg: {
      type: String,
      required: true,
      default: "",
    },
  },
  emits: ["sendFn"],//添加这一行解决
  setup(props,ctx) {
      let childMsg="我是sub，我要传给father"
      let childObj={'name':'sub','value':'zhihui 19'}
      console.log(props.msg)
      onMounted(()=>{
          ctx.emit('sendFn',childMsg)
      })
      let transFn=()=>{
           ctx.emit('sendFn',childObj)
      }
    return {childMsg,childObj,transFn};
  },
});
</script>
