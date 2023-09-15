import React, { Component } from 'react'

export default class Demo extends Component {
  state={count:0}
  increment = ()=> {
    // 对象式setState：对象式setState是函数式的语法糖
    // const {count} = this.state
    // this.setState({count:count+1},() => {
    //   // 这里的回调相当于vue中的nexttick，可以拿到渲染后的状态值，这是可选的参数
    // })

    // 函数式setState： 可以获取到状态值和props
    this.setState((state,props) => {
      console.log(state,props)
      return {count:state.count+1}
    },() => {
      // 这里的回调相当于vue中的nexttick，可以拿到渲染后的状态值，这是可选的参数
    })
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.increment}>点我+1</button>
      </div>
    )
  }
}
