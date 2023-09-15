import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 全选按钮的回调
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  // 清除已完成任务的回调
  handleDelete = () => {
    this.props.deleteDoneTodo()
  }
  render() {
    const{todos} = this.props
    // 已完成的个数(reduce函数第一个参数是回调函数（回调函数里第一个参数是前一个值（第一个就是从初始值0开始），第二个参数是遍历数组里的每一个item），第二个参数是初始值)
    const doneCount = todos.reduce((pre,item) => {return pre + (item.done ? 1 : 0)},0)
    // 总数
    const total = todos.length
    return (
      <div className='todo-footer'>
          <label>
            <input type='checkbox' onChange={this.handleCheckAll} checked={doneCount === total && total!==0 ? true : false}/>
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
          <button onClick={this.handleDelete} className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}
