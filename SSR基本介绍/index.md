# SSR 初探

SSR (Server side Render)服务器端渲染

> 渲染：页面形成的过程，html 文件，内容形成的过程。

CSR (Client side Render)客户端渲染

> 渲染：页面内容通过 js 执行形成。

## 前端发展史

    1.静态页面阶段
        document (文档)
    2.服务端渲染阶段
        js刚刚出生时候，要不做不了，要不做不好。
        PHP smarty
        java jsp，volicity,freemaker
        python

        优点：
            1.前端压力小，直接渲染
            2.有利于seo(搜索引擎优化)，公共流量vs私域流量
        缺点：
            1.学习成本高
            2.开发成本高
            3.服务器压力大

        利用模板修改页面

    3.客户端渲染(前后端分离)
        浏览器越来越快，意味着js能做的事越来越多
        css3，html5，cssnext，es678，设计模式，vue

        优点：
            1.前后端分离，前端(UI + 交互)，后端(API + 数据)
            2.体验好(hative),SPA(单页面应用)

        缺点：
            1.首屏加载慢 (落地页)
            2.SEO不好

    4.同构(Vue SRR,SSR + CSR)
        nodejs,会js就可以开发服务端。

        缺点：服务端要跑一次，客户端也要渲染
