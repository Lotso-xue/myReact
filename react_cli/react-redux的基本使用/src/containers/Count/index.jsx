// 引入action
import { incrementAction,decrementAction,incrementAsyncAction} from '../../redux/count_action'

// 引入connect 用于连接ui组件与redux
import {connect} from 'react-redux'

import React, { Component } from 'react'

 class Count extends Component {
  increment = () => {
    const {value} = this.selectValue
    this.props.jia(value*1)
  }
  decrement = () => {
    const {value} = this.selectValue
    this.props.jian(value*1)
  }
  incrementOfOdd = () => {
    const {value} = this.selectValue
    const count = this.props.count
    if(count % 2 !== 0){
      this.props.jia(value*1)
    }
  }
  incrementAsync = () => {
    const {value} = this.selectValue
    this.props.jiaAsync(value*1,500)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>当前总和为：{this.props.count}</h1>
        <select ref={c => this.selectValue = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOfOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}



// mapStateToProps函数返回的是一个对象
// 对象中的key是被作为传递给ui组件props的key，value作为传递给ui组件props的value
// 目的：是用来传递状态
// const mapStateToProps =  state => ({count:state})

// mapDispatchToProps函数返回的是一个对象
// 对象中的key是被作为传递给ui组件props的key，value作为传递给ui组件props的value
// 目的：是用来传递操作状态的方法
// const mapDispatchToProps =  dispatch => ({
//         jia: number => dispatch(incrementAction(number)),
//         jian: number => dispatch(decrementAction(number)),
//         jiaAsync: (number,time) => dispatch(incrementAsyncAction(number,time)),
// })


// 使用 connect()(ui组件)来暴露一个count的容器组件
// export default  connect(mapStateToProps,mapDispatchToProps)(CountUI)


// mapDispatchToProps的简写：redux帮他来dispatch，我们只用传递一个action即可
export default  connect(
    state => ({count:state}),
    {
        jia: incrementAction,
        jian: decrementAction,
        jiaAsync: incrementAsyncAction,
    }
    )(Count)
