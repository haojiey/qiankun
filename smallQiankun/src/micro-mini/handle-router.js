import {getApps} from './index'
import {importHTML} from './import-html'
import {getPrevRouter,getNextRouter} from './rewrite-router'


/**
 * 处理路由变化
 */
export const handleRouter = async () => {
     // 2.匹配子应用
     // 2.1 获取子应用路由规则
     const apps = getApps();

     // 卸载上一个应用
     const prevApp = apps.find(app => {
        return getPrevRouter().startsWith(app.activeRule)
     })

     const app = apps.find(item => getNextRouter().startsWith(item.activeRule))

     //上一个子应用存在，进行销毁
     if(prevApp){
        await unmount(prevApp)
     }

     if(!app){
        return
     }
     // 2.2 获取子应用内容
     // 3加载子应用
     const {template,execScripts} = await importHTML(app)
     const container = document.querySelector(app.container)
     container.append(template)

    //设置在主应用运行时
    window.__POWERED_BY_QIANKUN__ = true
    //设置子应用运行时路径
    window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__= app.entry +'/';

     const appExports = await execScripts()
     console.log(appExports)

     app.bootstrap = appExports.bootstrap;
     app.mount = appExports.mount;
     app.unmount = appExports.unmount;

    await bootstrap(app)
    await mount(app)

    //  getExternalScripts().then(res => {
    //     console.log(res)
    //  })
     // 插入容器
   
}

async function bootstrap(app){
    app.bootstrap && (await app.bootstrap())
}
async function mount(app){
    app.mount && (await app.mount(
        {
            container: document.querySelector(app.container)
        }
    ))
}
async function unmount(app){
    app.unmount && (await app.unmount())
}