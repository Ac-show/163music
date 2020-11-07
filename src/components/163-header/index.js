import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import HeaderWrapper from './style'

export default memo(function ACAppHeader() {
  return (
    <HeaderWrapper>
      <div className="context">
        <div className="left">
          <div className="logo sprite_01"></div>
          <NavLink exact to="/">发现音乐</NavLink>
          <NavLink to="/mine">我的音乐</NavLink>
          <NavLink to="/friend" className="flag-icon">朋友<i className="friend-icon"></i></NavLink>
          <a href="https://music.163.com/store/product">商城</a>
          <a href="https://music.163.com/#/login?targetUrl=http%3A%2F%2Fmusic.163.com%2Fmusician%2Fartist">音乐人</a>
          <NavLink to="/download" className="flag-icon">下载客户端<i className="hot-icon sprite_01"></i></NavLink>
        </div>
        <div className="right">
          <input placeholder="音乐/视频/电台/用户" className="search sprite_01"/>
          <a href="#/" className="create-center">创作者中心</a>
          <a href="#/" className="login">登录</a>
        </div>
      </div>
      <div className="underline"></div>
    </HeaderWrapper>
  )
})
