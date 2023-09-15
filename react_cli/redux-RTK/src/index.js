// 引入react核心库
import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'
// 引入App
import App from './App'

// 渲染 这是react17之前版本的写法
// ReactDOM.render(<App/>,document.getElementById('root'))


// 为提供的创建一个 React 根container并返回根。
const root = createRoot(document.getElementById("root"));
// 根可用于将 React 元素渲染到 DOM 中
root.render(<Provider store={store}><App /></Provider> );

