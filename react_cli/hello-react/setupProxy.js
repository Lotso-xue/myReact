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