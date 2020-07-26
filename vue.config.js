module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}
// module.exports = {
//    configureWebpack:{
//        resolve:{
//            alias:{
//                'assets':'@/assets',
//                'components':'@/components',
//                'views':'@/views'
//            }
//        }
//    }
// }