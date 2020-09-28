import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import CustomTabBar from '../../components/custom-tab-bar'
import { View, Text } from '@tarojs/components'
import './index.less'


export default class Index extends Component {

  componentWillMount() { 
  }

  componentDidMount() {
  }

  componentWillUnmount() { }

  componentDidShow() { 
    Taro.hideTabBar()
  }

  componentDidHide() { }

  handleClick(){}
  render() {
    return (
      <View className='index'>
        首页
        <CustomTabBar menuNum={0}/>
      </View>
    )
  }
}
