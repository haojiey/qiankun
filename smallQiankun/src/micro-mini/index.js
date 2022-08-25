import {rewriteRouter} from './rewrite-router'
import {handleRouter} from './handle-router'

// 存放子应用信息
let _apps = []

export const getApps = () => _apps

// 1.注册子应用
export const registerMicroApps = (apps) => {
    _apps = apps
}

// 2.启动微服务
export const start = () => {
    // hash路由 onhashchange
    // history路由为例
    // 1.监听路由变化
    // history
        // history.go history.back history.forward 使用popstate 事件 ： window.onpopstate
        // pushState replaceState 需要通过函数重写的方式进行劫持

    rewriteRouter()
    // 2.匹配子应用
    // 刷新手动加载
    handleRouter()

    // 3.加载子应用
    // 4.渲染子应用
}