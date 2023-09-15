import React, { Component } from 'react'
import Child from './Child'

// 只能捕获后代组件render时产生的错误,然后渲染出备用页面,不能捕获自己组件产生的错误和其他组件在合成时间,定时器中产生的错误.
export default class Parent extends Component {

    state={
        // 用于标识子组件是否产生错误
        hasError:''
    }

    // 当Parent的子组件出现报错的时候,会触发getDerivedStateFromError调用,并携带错误信息
    static getDerivedStateFromError(error){
        // 返回新的state
        return {hasError:error}
    }

    componentDidCatch(){
        console.log('此处统计错误,反馈给服务器,用于通知编码人员进行bug的解决')
    }

  render() {
    return (
      <div>
        <h3>我是Parent组件</h3>
        {this.state.hasError ? <h2>当前网络不稳定,稍后再试</h2> : <Child/>}
      </div>
    )
  }
}
