import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  // 1.如何确定数据放在哪个组件的state里？
  // 答： 若只是某单个组件使用：则放在其自身组件的state里
  //      若多个组件都需要使用： 则放在这些组件共同的父组件里的state （这叫状态提升）
  //2. 状态在哪里，操作状态的方法就在哪里
  //3. 父组件给子组件传数据：通过props传递
  //   子组件给父组件传数据：通过props传递，要求父组件提前给子组件传递 要操作状态的 函数
  //4. defaultChecked 只在第一次初始化时生效，其余都不生效
  //   checked 任何时候都生效，但是必须和onChange事件一起使用



  
// 初始化状态
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false},
    {id:'004',name:'逛街',done:false},
  ]}

  // addTodo用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj) =>{
    // 获取原todos
    const {todos} = this.state
    // 追加一个todo
    const newTodos = [todoObj,...todos]
    // 更新状态
    this.setState({todos:newTodos})
  }

  // updateTodo用于更新一个todo对象的是否勾选
  updateTodo = (id,done) => {
    // 取数据
    const {todos} = this.state
    // 匹配且处理数据
    const newTodos =  todos.map((todoObj) => {
      // 如果遍历的id和传过来的id一样的话，就用扩展运算符来修改对象里的done值为传过来的done值,否则就直接return原先的对象
      if(todoObj.id === id) return {...todoObj,done:done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  // deleteTodo用于删除一个todo
  deleteTodo = (id) => {
    const {todos} = this.state
    // 删除指定id的todos对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    // 更新状态
    this.setState({todos:newTodos})
  }

  // checkAllTodo 用于全选
  checkAllTodo = (done) => {
    const {todos} = this.state
    // 点击全选或者全不选按钮就把done值改为传过来的true和false值
    const newTodos = todos.map((todoObj) => {
      return {...todoObj,done:done}
    })
    // 更新状态
    this.setState({todos:newTodos})
  }

  // deleteDoneTodo用于清除已完成的任务
  deleteDoneTodo = () => {
    const {todos} = this.state
    // 每一项done值为true的都不要
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done === false
    })
    // 更新状态
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
            <Header addTodo={this.addTodo} />
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteDoneTodo={this.deleteDoneTodo}/>
        </div>
      </div>
    )
  }
}
