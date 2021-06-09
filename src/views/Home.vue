<template>
  <div>
    <el-button type="primary"  @click="beginFn">开始任务</el-button>
    <!-- <button @click="routerFn">路由传参</button> -->
  </div>
</template>
<script>
import { defineComponent,ref } from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
  name:'home',
  setup() {
    const userRouter = useRouter()
    let beginFn=()=>{
      console.log('begin')
      userRouter.push('/detail')
    }
    let name=ref('zhihui')
    let age=ref(30)
    let obj=ref({'favirate':'running'})
    let routerFn=()=>{
      userRouter.push({
        name:'About',
        // path:'/about',
        params:{
           name:name.value,
          age:age.value,
          obj:JSON.stringify(obj.value)
        }
        // query:{
        //   name:name.value,
        //   age:age.value,
        //   obj:JSON.stringify(obj)
        // }
      })
    }
    return{
      beginFn,
      routerFn,
    }
  },
})
</script>
