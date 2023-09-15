求和案例---react-redux---两个组件数据共享版:
    1.定义一个Person组件，和Count组件通过redux共享数据
    2.为Person组件编写：reducer，action，配置constant常量
    3.重点： Person组件的reducer和Count组件的reducer要使用combineReducers进行合并！
            合并后的总状态是一个对象！！！
    4.交给store的是总reducer，最后注意在组件中取出状态时，要取到具体的哪个状态（state.xxxx）



纯函数：
    redux的reducer必须是一个纯函数！！！！，否则不会引起数据更新。
    1.定义：纯函数只要输入同一个实参，就必定会得到同样的返回值。
    2.遵守以下约束：
        1.不得在纯函数里面修改参数数据
        2.不得写网络请求，输入输出设备
        3.不能调用Date.now()或者Math.random等随机输出值的方法



react-redux开发者工具的使用：
    1. npm i redux-devtools-extension
    2.store中配置：
        import { composeWithDevTools} from 'redux-devtools-extension'
        export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
        注意：如果createStore没有第二个参数，则是：
                export default createStore(allReducer,composeWithDevTools())
                否则要把第三个参数放在composeWithDevTools()里面。


reducers文件夹中，编写index.js专门用于汇总并暴露汇总后的reducer