import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import CustomTabBar from '../../components/custom-tab-bar'
import { View, Text } from '@tarojs/components'
import './index.less'


export default class WineList extends Component {

  componentWillMount () {
    Taro.hideTabBar()
  }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { 
    Taro.hideTabBar()
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
       酒单
       <CustomTabBar menuNum={1}/>
      </View>
    )
  }
}
