setState:
        1、setState更改状态是异步的。
        2、setState第二个参数是一个回调，在state修改完成后执行
        3、setState第一个参数有两种格式，对象和函数,函数接收两个参数 state和props；


lazyLoad:
        不适用懒加载会导致项目直接加载所有路由组件，若网速慢或者项目大时用户体验不佳。
        懒加载的使用方法
        // 引入lazy和Suspense
        import React, { Component, lazy, Suspense } from "react";
        // 用lazy包裹组件的引入
        const About = lazy(() => import("./About"));
        const Home = lazy(() => import("./Home"));
        // 用Suspense包裹所有route，并为其提供加载中显示的组件
        <Suspense fallback={<h1>1111</h1>}>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
        </Suspense>



Hooks:
        1、state Hook
        (1)state hook让函数也有state状态，并对状态数据进行读写操作
        (2)语法： const [xxx, setXxx] = React.useState(initValue)
        (3)说明：
        参数：初始值
        返回值： 包含两个元素的数组，0为状态，1为更新状态值的函数
        (4) setXxx的两种用法
        setXXX(newValue):参数为新的状态值。
        setXxx(value => newValue)：参数为函数，接收原状态，返回新状态

        2、Effect Hook
        useEffect(() => {
            // 可以做任何事情
            console.log(1111);
            return () => {
                // 在组件卸载时调用，以及每次触发effect（除了第一次）后也会x先调用return的函数，再调用上面的部分
            }
        }, []) // 第二个参数不传则在初始化以及任何更新时调用，传空数组则仅在初始化时调用，传某些state则仅在这些state更改时调用。可以当做componentDidMount,watch,componentDidUpdate

        3、Ref Hook
        用法:
        const  myRef = React.useRef();
        <input ref={myRef} type="text">



Fragment:
        <Fragment></Fragment> // 不会被渲染成标签，不接受除key以外的任何属性
        <></> // 不会被渲染成标签，不接收任何属性



Context:
        context主要解决多层组件传递props的问题，使用context就可以祖孙或者更深层的传递参数。
        // context.js
        // 先创建context，括号中可传入初始值。可单独定义在外面，然后各个组件再引入。
        const MyContext = React.createContext(init);
        export default MyContext

        // A组件
        import MyContxt from './context'
        const {Provider} = MyContext; // 跟react-redux中的Provider传递store很像
        render() {
        return (
            // 在需要引入数据的最外层包裹Provider组件，并通过value传递数据，B及B下的所有组件都可以拿到value了
            <Provider value={userName: 'xxx'}>
                <B/>
            </Provider>
        )
        }
        // B组件
        // 假设B组件并不需要使用context里的数据，那么它也不需要做任何操作
        ...
        render() {
            return <C/>
        }

        // C组件
        // 引入context
        import MyContext from './contex';
        ...
        // 在类上定义contextType属性，此属性可以让你使用 `this.context` 来获取context的值
        static contextType = MyContext; 

        render() {
            return <div>{this.context.userName}</div>
        }
        我们也可以通过传递函数的方式动态修改context里的值
        // A组件
        ...
        state ={
            userName: 'xxx'
        }
        changeUserName = () => {
            this.setState({
                userName: 'www'
            })
        }
        render() {
        return (
            <Provider value={userName: this.state.userName, changeUserName: this.changeUserName}>
                <B/>
            </Provider>
        )
        }

        // C组件
        ...
        render() {
            return (
                <div>{this.context.userName}</div>
                <button onClick={this.context.changeUserName}>修改用户</button>
            )
        }
        如果是函数式组件，无法在类中声明contextType，我们可以使用Context.Consumer
        import MyContext from "./Context";
        const { Consumer } = MyContext;
        // C组件
        ...
        return (
            // consumer里包裹一个函数，函数入参即context传递的value
            <Consumer>
            {value => {
                return (
                <div>{value.userName}, 年龄：{value.userAge}</div>
                )
            }}
            </Consumer>
        )




Purecomponent:
        component的两个问题
        1、只要setState即使不改变状态也会重新render
        2、只要父组件render,子组件无论有没有使用父组件数据，都也会render
        优化：
        我们可以通过shouldComponentUpdate钩子优化：
        shouldComponentUpdate(nextProps, nextState) {
            // 对比新旧prop和state是否有变化，没变化则返回false;
        }

        但是自己实现对比比较麻烦，我们可以使用pureComponent组件，该组件会自动帮我们写shouldComponentUpdate里的对比逻辑来实现高效的render
        class Demo extents React.PureComponent {
        }

        但是他有一个问题，若setState传入的对象与state指针相同，则pureComponent中的shouldComponentUpdate阀门会返回false，无法实现功能。
        let obj = this.state; // 浅拷贝，指向的是同一个对象
        obj.carName = 'obj'
        this.setState(obj);

        所以不要直接更改数据，要产生新数据。
        renderProps实现方案
        1、childrenProps，问题：B拿不到A中的数据
            <A>
                <B></B>
            </A>
            
            class A extend Component {
                this.state = {name: '1'}
                render () {
                    <div>
                        {this.props.children}
                    </div>
                }
            }
            

        2、render props: 向A传递一个函数prop（自定义名称。一般叫render），该函数返回一个组件
            class parent extent Component{
                render() {
                    return (
                        <A render={(data) => <B data={data}/>} />
                    )
                }
            } 
            class A extend Component {
                this.state = {name: '1'}
                render () {
                    <div>
                        // 在A组件内调用传入的render方法，并可以传递参数。
                        // 那么在上面提到的函数中也就能接受到参数并传递给B了
                        {this.props.render(data)}
                    </div>
                }
            }





错误边界 ErrorBoundary:
        getDerivedStateFromError 从错误中获取衍生状态：在任何子组件发生错误时调用该钩子（适用于生产，本地还是会在页面报错）只适用于后代组件生命周期中产生的错误。
        state = {
            hasError: ''
        }
        static getDerivedStateFromError (error) {
            return {hasError: error}
        }

        componentDidCatch渲染组件时出错时调用的钩子；一般可在此钩子中统计错误，反馈给后台


