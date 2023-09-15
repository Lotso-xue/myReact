import React, { Component } from 'react'
import './index.css'


// 相当于Vue中的slot插槽技术,
// 详情:https://blog.csdn.net/TL18382950497/article/details/115545871




export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h4>我是Parent组件</h4>
        {/* 把自己的状态拿给自己的子组件去用 */}
        <A render={(name) => <B name={name}/>}/>
      </div>
    )
  }
}


class A extends Component {
    state = {name:'tom'}
    render() {
      return (
        <div className='a'>
          <h4>我是A组件</h4>
          {/* 暴露出自己的状态 */}
          {this.props.render(this.state.name)}
        </div>
      )
    }
  }

  
  class B extends Component {
    render() {
      return (
        <div className='b'>
          <h4>我是B组件,A组件传来的值是:{this.props.name}</h4>

        </div>
      )
    }
  }
  