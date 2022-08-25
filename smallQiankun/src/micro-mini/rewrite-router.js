import {handleRouter} from './handle-router'
 // 上一个路由
 let prevRouter = '';
 // 下一个路由
 let nextRouter = window.location.pathname

 export const getPrevRouter = () => prevRouter;
 export const getNextRouter = () => nextRouter;



export const rewriteRouter = () => {
   
    window.addEventListener('popstate', () => {
        prevRouter = nextRouter;
        nextRouter = window.location.pathname;
        handleRouter()
    })

    // 备份初始方法
    let originPushState = window.history.pushState;
    window.history.pushState = (...args) => {
        prevRouter = window.location.pathname;
        originPushState.apply(window.history, args)
        nextRouter = window.location.pathname;
        handleRouter()
    }

    // 备份初始方法
    let originReplaceState = window.history.replaceState;
    window.history.replaceState = (...args) => {
        // prevRouter = window.location.pathname;
        originReplaceState.apply(window.history, args)
        // nextRouter = window.location.pathname;
        // handleRouter()
    }

}