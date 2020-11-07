import React, { memo } from 'react';

import { FooterWrapper } from './style'

import { footerComServie, licence, tipEmail, keepNet, police } from '@/common/local_data'

export default memo(function ACAppFooter() {
  return (
    <FooterWrapper>
      <div className="wrap-v2 container">
        <div className="footer-left">
          <div className="com-service">
            {footerComServie.map(item => <a href={item.link}>{item.title}</a>)}
          </div>
          <p>网易公司版权所有©1997-2020<b></b>杭州乐读科技有限公司运营：<a href={licence.link}>{licence.title}</a></p>
          <p>违法和不良信息举报电话：0571-89853516<b></b>举报邮箱：<a href={tipEmail.link}>{tipEmail.title}</a></p>
          <p>粤B2-20090191-18<a href={keepNet.link} className="keep-net" >{keepNet.title}</a><i className="police-icon"></i><a href={police.link}>{police.title}</a></p>
        </div>
        <div className="footer-right">
          {[0, 1, 2, 3, 4].map((item) => {
            return (
              <div key={item}>
                <div className={"sprite_footer_02 si service-icon" + (item + 1)}></div>
                <div className={"sprite_footer_01 ss service" + (item + 1)}></div>
              </div>
            )
          })}
        </div>
      </div>
    </FooterWrapper>
  )
})
