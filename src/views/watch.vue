<template>
    <div>
        watch监听ref属性值：{{a}}
       <el-button type="primary" @click="plusFn">ref加1</el-button>
    </div>
    <div>
         watch监听reactive属性值：{{b}}
         <el-button type="primary" @click="plus1Fn">reactive加1</el-button>
    </div>
    <div>
        
    </div>
</template>
<script>
import { defineComponent,reactive,ref,watch } from 'vue'

export default defineComponent({
    setup() {
        let a = ref(10)
        let b = reactive({age:1})
        watch(a, ()=>{
            console.log(a.value)
        })
        let plusFn=()=>{
            a.value++
        }
        let plus1Fn=()=>{
            b.age++
        }
        watch(()=>b.age, (newVal, oldVal,clear)=>{
            console.log(newVal, oldVal,clear)
        })
        return{
            a,
            plusFn,
            plus1Fn,
            b
        }
    },
})
</script>
<style scoped>

</style>
