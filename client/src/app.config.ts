export default {
  pages: [
    'pages/index/index',
    'pages/wine_user/index',
    'pages/wine_list/index'
  ],
  tabBar: {
    list: [{
      pagePath: 'pages/index/index',
      text: '最新'
    }, {
      pagePath: 'pages/wine_list/index',
      text: '热门'
    }, {
      pagePath: 'pages/wine_user/index',
      text: '热门'
    }],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  cloud: true
}
