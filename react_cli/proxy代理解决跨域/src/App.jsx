import React, { Component } from 'react'
import Search  from './components/Search'
import List from './components/List'
export default class App extends Component {

// 总结：
// 文件名必须是 setupProxy.js
// 跨域的话在setupProxy文件里配置以下信息就行  （此案例接口后端已经解决了跨域）
// const proxy = require('http-proxy-middleware')

// module.exports = function(app){
//     app.use(
//         proxy('/api1',{  //遇见/api1前缀的请求，就会触发该代理配置
//             target： 请求转发给谁
//             // target:'http://localhost:....',
//             // 控制服务器收到的请求头中Host字段的值
//             changeOrigin:true,
//             // 重写请求路径
//             pathRewrite:{'^/api1':''}
//         }),
//         proxy('/api2',{
//             // target:'http://localhost:....',
//             changeOrigin:true,
//             pathRewrite:{'^/api2':''}
//         })
//     )
// }

state= {
  users:[],//初始化状态
  isFirst:true,//是否为第一次打开页面
  isLoading:false,// 是否处于加载中
  err:''//存储请求相关信息

} 

updateAppState = (stateObj) => {

  this.setState(stateObj)
}

  render() {
    return (
      <div className='container'>
       <Search updateAppState={this.updateAppState} ></Search>
        <List  {...this.state}></List>
      </div>
    )
  }
}
