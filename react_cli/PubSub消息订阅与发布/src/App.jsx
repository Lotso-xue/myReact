import React, { Component } from 'react'
import Search  from './components/Search'
import List from './components/List'
export default class App extends Component {

// 总结：PubSub消息订阅与发布机制可以实现任意组件间的通信 （这样兄弟组件之间传递数据更方便，不用在共同的父组件里存放state了）
// 订阅消息： （接收数据的一端）
              // componentDidMount(){
              //   this.token = PubSub.subscribe('消息名',(消息名,传过来的数据) => {
              //     这里面可以对数据做任何操作。。。
              //     this.setState(传过来的数据)
              //   })
              // }
              // componentWillUnmount(){
              //  要在componentWillUnmount生命周期里取消订阅
              //   PubSub.unsubscribe(this.token)
              // }

// 发布消息：（是想要发送数据的一端）
              // PubSub.publish('消息名',需要传递的数据)




  render() {
    return (
      <div className='container'>
       <Search ></Search>
        <List  ></List>
      </div>
    )
  }
}
