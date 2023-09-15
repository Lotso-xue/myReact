import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment,decrement,incrementAsync } from '../../redux/actions/count'

 class Count extends Component {
  increment = () => {
    const {value} = this.selectValue
    this.props.jia(value*1)
  }
  decrement = () => {
    const {value} = this.selectValue
    this.props.jian(value*1)
  }
  incrementForOdd = () => {
    const {value} = this.selectValue
    const count = this.props.count
    if(count % 2 !==0){
      this.props.jia(value*1)
    }

  }
  incrementAsync = () => {
    const {value} = this.selectValue
    this.props.jiaAsync(value*1,500)
  }
  render() {
    return (
      <div>
        <h2>我是Count组件，下方组件总人数为：{this.props.personSum}</h2>
        <h4>当前总数为：{this.props.count}</h4>
        <select ref={c => this.selectValue = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementForOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default connect(
  state => ({count:state.count,personSum:state.persons.length}),
  {
    jia:increment,
    jian:decrement,
    jiaAsync:incrementAsync
  }
)(Count)
