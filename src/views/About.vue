<template>
  <div>
    我是father父组件
    <child :msg="msg" @sendFn="sendFn"></child>
    <div>
      我是子组件传过来的值：{{subTrans}}
    </div>
  </div>
</template>
<script>
import { defineComponent,reactive,computed,ref } from 'vue'
import child from '@/components/children/child'
export default defineComponent({
  name:'about',
  components:{
    child
  },
  setup() {
    let msg = '我是father向sub传的值'
    let subTrans = reactive({})
    let sendFn= (val)=>{
      console.log(val)
      subTrans.value = val
    }
    return{
      msg,
      sendFn,
      subTrans
    }
  },
})
</script>
