import React, { Component } from 'react'

export default class Child extends Component {
    // state = {stus:[
    //     {id:'001',name:'tom',age:'12'},
    //     {id:'002',name:'jack',age:'10'},
    //     {id:'003',name:'haha',age:'16'}
    // ]}
    state = {stus:'abc'}
  render() {
    return (
      <div>
        <h3>我是Child组件</h3>
        {
            this.state.stus.map((stuObj) => {
                return <h5 key={stuObj.id}>{stuObj.name}---{stuObj.age}</h5>
            })
        }
      </div>
    )
  }
}
