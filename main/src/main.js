import { createApp } from 'vue'
import { registerMicroApps, start } from 'qiankun';
// import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'

//1.在主应用中注册微应用
//微应用不需要额外安装任何其他依赖即可接入 qiankun 主应用。
registerMicroApps([
    {
      name: 'app vue2', // 字应用名称
      entry: '//localhost:9001', // 子应用入口地址
      container: '#subContent',// 插入子应用的容器
      activeRule: '/appVue2', // 路由匹配规则
    },
    // {
    //   name: 'app vue3',
    //   entry: '//localhost:9002',
    //   container: '#subContent',
    //   activeRule: '/appVue3',
    // },
]);

start({
    sandbox:{
        strictStyleIsolation: true
    }
});

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
