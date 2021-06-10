import { createStore } from 'vuex'

export default createStore({
 
  state: {
     // 初始化状态
    dataList:[
      {title:'吃饭',complete:true},
      {title:'睡觉',complete:false},
      {title:'打豆豆',complete:false},
    ]
  },
  mutations: {
    setDataList(state, payload){
      state.dataList = payload
    },
    //同步修改state 都是方法
    // 第一个参数 state 第二个参数，需要修改的值
    // 搜索文本框中，如果搜索内容没有，则添加到列表里，如果有，则显示已存在。
    addOption(state, payload){
      state.dataList.push(payload)
      console.log(state.dataList)
    },
    // 数据列表里删除按钮，点击后删除此条数据
    delOption(state, payload){
      state.dataList.splice(payload,1)
      console.log(state.dataList)
    },
    // 清除已选按钮，点击后，清空列表
   delAllOption(state, payload){
     state.dataList=payload
     console.log(state.dataList)
   },
   saveLocalData(state, payload){
     localStorage.setItem('localData',payload)
   },
  },
  actions: {
    // 异步提交mutation
    // 第一个参数， store 第二个参数是修改的值
    asyncDataList(store, params){
      //commit来调用mutation，actions里方法不可以直接修改state,store里只有mutation可以修改state
      // commit 第一个参数是所需要调用 的mutations的方法，params是修改的值
      store.commit('setDataList', params) 
    }
  },
  modules: {
    // 模块化
  }
})
