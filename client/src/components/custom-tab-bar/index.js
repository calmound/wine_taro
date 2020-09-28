import React, { Component, useState, useCallback } from "react";
import Taro from "@tarojs/taro";
import { AtTabBar } from "taro-ui";
import "taro-ui/dist/style/index.scss";
import "./index.less";
import { View, Text } from "@tarojs/components";
import classnames from "ClassNames";

const clsPrefix = "bottom-menu";
const CustomTabBar = props => {
  console.log('init ',props.menuNum)
  const [menuItem, setMenuItem] = useState(props.menuNum);
  const menus = [
    {
      url: "/pages/index/index",
      name: "最新"
    },
    {
      url: "/pages/wine_list/index",
      name: "热门"
    },
    {
      url: "/pages/wine_user/index",
      name: "我的"
    }
  ];
  const menuItemClick = useCallback(num => {
    Taro.switchTab({ url: menus[num].url });
  });

  return (
    <View className="bottom-menu">
      <View
        className={classnames(`${clsPrefix}-item `, menuItem === 0 && "active")}
        onClick={() => {
          menuItemClick(0);
        }}
      >
        <Text className="nav-icon icon1"></Text>
        <Text className="text">今日饮</Text>
      </View>
      <View
        className={classnames(`${clsPrefix}-item `, menuItem === 1 && "active")}
        onClick={() => {
          menuItemClick(1);
        }}
      >
        <Text className="nav-icon icon2"></Text>
        <Text className="text">酒单</Text>
      </View>
      <View
        className={classnames(`${clsPrefix}-item `, menuItem === 2 && "active")}
        onClick={() => {
          menuItemClick(2);
        }}
      >
        <Text className="nav-icon icon2"></Text>
        <Text className="text">我的</Text>
      </View>
    </View>
  );
};

export default CustomTabBar;
