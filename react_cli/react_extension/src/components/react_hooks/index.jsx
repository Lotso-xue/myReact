import React from 'react'
import ReactDOM  from 'react-dom'

//  class Demo extends React.Component {
//     state = {count:0}

//     add = () => {
//         this.setState(state => {
//             return {count:state.count+1}
//         })
//     }

//     show = () => {
//         const {value} = this.showValue
//         console.log(value)
//     }

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     componentDidMount(){
//         this.timer = setInterval(() => {
//             this.setState(state => {return {count:state.count+1}})
//         }, 1000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={c => this.showValue = c} />
//         <h2>当前求和为：{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     )
//   }
// }

 function Demo(){
    // 1.  React.useState() : 参数是第一次初始化的值，返回值是包含2个元素的数组，第一个是内部当前状态值，第二个是更新状态值的函数
    const [count,setCount] = React.useState(0)

    // 2. React.useRef(): 创建一个ref容器，用法和CreateRef()一样，注册：ref={myRef}，使用：容器名.current.value
    const myRef = React.useRef()

    // 3.  React.useEffect()是相当于两个周期：DidMount,Didupdat,
    // 至于具体是哪个周期是看第二个参数：
    //          如果没有第二个参数就是DidMount,Didupdat（全部状态都监测），
    //          如果第二个参数是空数组就是DidMount，（全部状态都不监测，只在页面第一次渲染时调用）
    //          第二个参数数组里有状态变量的话就是监测状态变量改变的话就调这个参数
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count+1)
        }, 1000);
        return () => {
            // 这里相当于willunmount,组件卸载前执行
            clearInterval(timer)
        }
         },[])


    function add (){
        setCount(count+1)
        // setCount第二种写法是setCount里面传一个函数，函数参数是上一个count值
        // setCount((count) => {return count+1})
    }

    function unmount () {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
     }

    function show (){
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef} />
        <h2>当前求和为：{count}</h2>
        <button onClick={add}>点我+1</button>
        <button onClick={unmount}>卸载组件</button>
        <button onClick={show}>点我提示数据</button>
      </div>
    )
}

export default Demo
