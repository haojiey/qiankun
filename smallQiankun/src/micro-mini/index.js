import {rewriteRouter} from './rewrite-router'
import {handleRouter} from './handle-router'

// 存放子应用信息
let _apps = []

// 获取子应用集合
export const getApps = () => _apps

// 1.注册子应用
export const registerMicroApps = (apps) => {
    _apps = apps
}

// 2.启动微服务
export const start = () => {
    // 1.监听路由变化
    rewriteRouter()
    
    // 2.匹配子应用
    // 刷新手动加载
    handleRouter()
}