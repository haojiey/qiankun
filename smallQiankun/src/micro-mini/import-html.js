import { fetchResource } from "./feth-resource"

export const importHTML = async(app) => {
    const text = await fetchResource(app.entry)
    const template = document.createElement('div')
    template.innerHTML = text

    // const html = await fetch(app.entry).then(res => res.text())

    const scripts = template.querySelectorAll('script')



    // 获取所有的script代码
    function getExternalScripts(){
        return Promise.all(Array.from(scripts).map(script => {
            const src = script.getAttribute('src')
            if(!src){
              return  Promise.resolve(script.innerHTML)
            }else{
                return fetchResource(
                    src.startsWith('http') ? src : `${app.entry}${src}`
                )
            }
        }))
    }

    // 执行script代码
    async function execScripts(){
       const scripts =  await getExternalScripts()
        // 构造commonjs 规范，以commonjs方式获取子应用暴露的方法
        // 手动构造一个commonjs环境
        const module = {exports : {}};
        const exports = module.exports;

       scripts.forEach(script => {
        eval(script)
       })
       return module.exports

        //这种方式需要知道子应用暴露的名称 
        //return window['appVue2'],

    }

   return{
        template,
        getExternalScripts,
        execScripts
   }
}