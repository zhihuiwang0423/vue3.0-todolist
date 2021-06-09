import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//这里是按需要加载引入代码
import 'element-plus/packages/theme-chalk/src/base.scss'
import { ElButton,ElInput,ElCheckbox } from 'element-plus'
const components = [ElButton,ElInput,ElCheckbox]
const app = createApp(App)
components.forEach(component => {
  app.component(component.name, component)
})
app.use(store).use(router).mount('#app')
