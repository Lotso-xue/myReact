import React, { Component } from 'react'
import './index.css'

// 创建Context容器对象，context是一般是适用于祖组件传给子孙组件，也可以传给子组件，但是一般不用。
const MyContext = React.createContext()

export default class A extends Component {

  state = {username:'tom',age:18}

  render() {
    const {username,age} = this.state
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是：{username},年龄：{age}</h4>
        {/* Provider是供应者的意思， value属性是你要传递的值，这样子组件与其子孙组件就可拿到值 */}
        <MyContext.Provider value={{username:username,age:age}}>
          <B/>
        </MyContext.Provider>
       
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='child'>
        <h3>我是B组件</h3>
        <C/>
      </div>
    )
  }
}

// 以下方式仅适用于类式组件：
// class C extends Component {
//   // context必须要声明接收才可以使用！！！
//   static contextType = MyContext

//   render() {
//     return (
//       <div className='grand'>
//         <h3>我是C组件</h3>
//         <h4>我从A组件接收到的用户名是：{this.context.username},年龄是：{this.context.age}</h4>
//       </div>
//     )
//   }
// }


// 以下方式适用与类式组件和函数式组件
function C (){
  // Consumer是消费者的意思，在这个标签里要写一个函数，函数参数就是context传下来的值
  return (
      <div className='grand'>
        <h3>我是C组件</h3>
        <h4>我从A组件接收到的用户名是：
          <MyContext.Consumer>
            {
              value => {
                return `${value.username},年龄是：${value.age}`
              }
            }
          </MyContext.Consumer>
        </h4>
    </div>
    
  )
}
