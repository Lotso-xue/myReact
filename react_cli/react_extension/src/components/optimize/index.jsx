import React, { PureComponent } from 'react'
import './index.css'

// component组件存在两个问题：
//  1.只要执行setState()，即使不改变状态的数据也会render()
//  2.只要当前组件重新render()，就会自动更新其子组件的render(),即使子组件没有用到父组件的任何数据---效率低


// 解决办法：
//  1. 重写shouldComponentUpdate()方法
//    比较新旧state或props数据，如果数据有变化才返回true，否则返回false
//  2. 使用PureComponent
//    PureComponent自己重写了shouldComponentUpdate()方法，只有state或props数据有变化才返回true
//    注意：
//        PureComponent只是进行了数据的浅比较，必须要内存地址改变才返回true，若只是内部数据改变返回的是false
//        所以，不要直接修改state数据，而是要产生新地址的数据.
//        项目中一般使用PureComponent来优化.



export default class Parent extends PureComponent {

state = {carname:'奔驰c63'}

changeCar = () => {
    this.setState({carname:'迈巴赫'})
}

// shouldComponentUpdate(nextProps,nextState){
//   console.log(this.props,this.state)//目前的props和state
//   console.log(nextProps,nextState)//接下来要变化的目标props和state
//   return !this.state.carname === nextState.carname
// }

  render() {
    const {carname} = this.state
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        <h4>我的车是：{carname}</h4>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carname='奥拓'/>
      </div>
    )
  }
}

class Child extends PureComponent {
//   shouldComponentUpdate(nextProps,nextState){
//   return !this.props.carname === nextProps.carname
// }
    render() {
      return (
        <div className='child'>
          <h3>我是Child组件</h3>
          <h4>我爹的车是：{this.props.carname}</h4>
        </div>
      )
    }
  }