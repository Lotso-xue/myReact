react-redux的基本用法：
    1.明确两个概念：
        UI组件：不能使用任何redux的api，这只负责页面的呈现，交互等
        容器组件：负责和redux通信，将结果交给UI组件

    2.如何创建一个容器组件： ----靠react-redux的connect函数
         connect(mapStateToProps,mapDispatchToProps)(UI组件)
            mapStateToProps：函数返回值是一个对象，用来传递状态
            mapDispatchToProps：函数返回值是一个对象，用来传递操作状态的方法
            备注：在UI组件中通过this.props可以拿到状态，和操作状态的方法。
                  容器组件中的store是靠props传进去的，而不是在容器组件中直接引入、

    3. mapDispatchToProps的简写：简写成一个对象，redux帮他来dispatch，我们只用传递一个action即可
            export default  connect(
                state => ({count:state}),
                {
                    jia: incrementAction,
                    jian: decrementAction,
                    jiaAsync: incrementAsyncAction,
                }
                )(CountUI)

    4.使用react-redux后无需自己监测状态的改变，容器组件自动完成这个工作。

    5.使用react-redux后无需自己在app组件里传store，而是在index.js里使用Provider来统一给多个容器组件传store
         root.render(<Provider store={store}><App /></Provider>);

    6.容器组件和UI组件整合成一个文件，UI组件不暴露，只暴露一个容器组件

    7.一个组件要和redux打交道要经过那几步？
        1）定义好UI组件 -----不暴露
        2）引入connect生成一个容器组件，并暴露，写法如下 ：
                connect(
                    state => ({key:value}), //传递状态
                    {
                        key:xxxxxAction //传递操作状态的方法
                    }
                )(UI组件)
        3）在UI组件中通过 this.props.xxxxx来读取状态和操作状态的方法。