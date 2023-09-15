// 引入react核心库
import React from 'react'
import { createRoot } from 'react-dom/client';
// 引入App
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// 渲染 这是react17之前版本的写法
// ReactDOM.render(<App/>,document.getElementById('root'))

    // 为提供的创建一个 React 根container并返回根。
    const root = createRoot(document.getElementById("root"));
    // 此处需要Provider包裹App，目的是让App所有的后代容器组件都能接收到store
    root.render(<BrowserRouter><App /></BrowserRouter>);



