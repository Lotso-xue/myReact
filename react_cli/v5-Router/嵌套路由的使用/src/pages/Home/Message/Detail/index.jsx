import React, { Component } from 'react'
// import qs from 'qs'

const detailData = [
    {id:'001',content:'你好，北京'},
    {id:'002',content:'你好，旧金山'},
    {id:'003',content:'你好，西雅图'},
]
export default class Detail extends Component {
  render() {
    // 1.接收params参数
    // const {id,title} = this.props.match.params

    // 2.接收search参数
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1))

    // 3.接收state参数
    const {id,title} = this.props.location.state || {}

    const findRes = detailData.find((detailObj) => {
        return detailObj.id === id
    }) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findRes.content}</li>
      </ul>
    )
  }
}
