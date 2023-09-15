import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    // Fragment标签：代替div作为最外层，做不可见的包裹元素。主要的作用就是避免了多层嵌套的div标签。
    //              key 是唯一可以传递给 Fragment 的属性。--用在需要遍历的时候
    return (
      <Fragment>
        <input type="text" />
        <input type="text" />
      </Fragment>
    )
  }
}
