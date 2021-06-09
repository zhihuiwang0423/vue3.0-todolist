<template>
  <div class="footer">
    <span>{{ btn1Name }}{{ btn1Val }}/{{ btn2Name }}{{ list.length }}</span>
    <el-button v-show="btn1Val" @click="delAllFn" type="primary" size="medium">{{ btn3Name }}</el-button>
  </div>
</template>
<script>
import {defineComponent, reactive,toRefs, computed, onMounted} from 'vue'
import {useStore} from 'vuex'
export default defineComponent({
  name:'navFooter',
  props:{
    list:{
      type:Array,
      default:[]
    }
  },
  emits:['delAllList'],
  setup(props, ctx){
    let dataList = reactive({
      btn1Name:'已选',
      btn1Val:0,
      btn2Name:'共有', 
      btn2Val:0,
      btn3Name:'删除已选'
    })
    dataList.btn1Val = computed(()=>{
     return  props.list.filter((item)=>item.complete).length
    })
    let delAllFn=()=>{
      ctx.emit('delAllList',props.list.filter((item)=>!item.complete))
    }
    
    return {
      ...toRefs(dataList),
      delAllFn,
    }
  }
})
</script>
<style scoped lang="scss">
.footer{
  border-top:1px solid #DCDFE6;
  overflow:Hidden;
  padding:15px;
  line-height: 36px;
  span{
    float:left
  }
  button {
    float:right;
    cursor: pointer;
  }
}
</style>