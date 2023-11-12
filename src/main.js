import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import axios from "axios";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
app.use(router).use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$axios=axios;
app.use(ElementPlus,  {
        locale: zhCn,
    })
    .mount('#app')


