import { createApp } from 'vue'
// import { registerMicroApps, start } from 'qiankun';

// import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'

// 引入自定义方法
import { registerMicroApps, start } from './micro-mini/index';

// 1.注册子应用
registerMicroApps([
    {
      name: 'app vue2', // 字应用名称
      entry: '//localhost:9001', // 子应用入口地址
      container: '#subContent',// 插入子应用的容器
      activeRule: '/appVue2', // 子应用路由匹配规则
    },
]);

// 2.启动微服务
start();

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
