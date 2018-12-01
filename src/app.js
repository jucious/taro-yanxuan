import Taro, {
  Component
} from '@tarojs/taro'
import Index from './pages/index'
import '@tarojs/async-await'
import './app.less'

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/cate/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      tabBar: {
        color: '#555',
        selectedColor: '#E43929',
        backgroundColor: '#fff',
        list: [{
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'assets/img/tab.png',
          selectedIconPath: 'assets/img/tab.png'
        }, {
          pagePath: 'pages/cate/index',
          text: '分类',
          iconPath: 'assets/img/tab.png',
          selectedIconPath: 'assets/img/tab.png'
        }]
      },
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return ( 
      <Index />
    )
  }
}

Taro.render( <App /> , document.getElementById('app'))
