import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  // 对接收的props进行：类型和必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  // 回车键盘事件的回调
  handleKeyUP = (event) => {
    // 解构赋值获取event里的keyCode,target
    const {keyCode,target} = event
    // 13 代表回车键，如果按的不是回车键则要return掉，
    if(keyCode !== 13) return
    // 判断todo名字不能为空
    if(target.value.trim() === ''){
      alert('输入不能为空')
      return
    }
    // 准备一个todo对象 (target.value是你输入框里输入的值)
    const todoObj = {id:nanoid(),name:target.value,done:false}
    // 将todoObj传给APP
    this.props.addTodo(todoObj)
    // 清空输入
    target.value = ''

  }
  render() {
    return (
      <div className='todo-header'>
          <input type='text' onKeyUp={this.handleKeyUP} placeholder='请输入你的任务名称，按回车键确认'/>
      </div>
    )
  }
}
