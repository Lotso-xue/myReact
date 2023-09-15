redux:
    1.去除Count组件自身的状态
    2.src下建立：
        -redux
            -store.js
            -count_reducer.js
            -count_action.js
            -constant.js
    3.store.js:
        引入redux中的createStore函数，创建一个store
        createStore调用时要传入一个为其服务的reducer
        记得暴露store对象
    4.count_reducer.js:
        reducer本质是一个函数，接收：preState（之前的状态），action（动作对象），返回加工后的状态
        reducer有两个作用：初始化状态，加工状态
        reducer被第一次调用是store自动触发的，传递的preState是undefined
    5.count_action.js:
        专门用于创建action对象
    6.constant.js:
        放置action对象中type的常量值
    7.在index.js中检测store状态的变化，一旦发生改变重新渲染<App/>
        备注：redux只负责管理状态，至于状态的变化驱动着页面的显示，要靠我们自己写：
                    store.subscribe(() => {
                        root.render(<App />);
                    })

    8.redux的异步action：
        1.明确意义 ：为了延迟的动作不想交给组件自身，想让action来做这个动作
        2.何时需要用到异步action： 想要对状态进行操作，但是具体 的数据需要靠异步任务返回时
        3.具体编码：
            1.npm i redux-thunk,并配置在 store中：
                export default createStore(countReducer,applyMiddleware(thunk))
            2.创建action的函数返回值不是一个对象，而是一个函数，在这个函数中写异步任务
            3.异步任务结束后 ，dispatch一个同步的action去真正操作数据
                // 异步action：就是指action的返回值为函数,异步action中一般都会调用同步action
                    export const incrementAsyncAction = (data,time) => {
                        return (dispatch) => {
                            setTimeout(()=>{
                                dispatch(incrementAction(data))
                            },time)
                        }
                    } 
