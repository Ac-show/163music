import styled from 'styled-components'


export const FooterWrapper = styled.div`
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  
  .container {
    display: flex;
    justify-content: space-between;

    .footer-left {
      color: #666;
      height: 115px;
      width: 520px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around; 
      box-sizing: border-box;
      padding-top: 15px;

      .com-service {
        a {
          color: #999;
        }

        a::after {
          content: '|';
          margin: 0 8px 0 10px;
        }
      }

      b {
        display: inline-block;
        width: 10px;
      }

      .keep-net {
        margin: 0 8px 0 10px;
      }
    }

    .footer-right {
      margin-top: 33px;
      display: flex;
      width: 420px;
      justify-content: space-between;

      .si {
        width: 50px;
        height: 45px;
        background-size: 110px 552px;
      }

      .service-icon1 {
        background-position: -63px -456.5px;
      }

      .service-icon2 {
        background-position: -63px -101px;
      }

      .service-icon3 {
        background-position: 0 0;
      }

      .service-icon4 {
        background-position: -60px -50px;
      }

      .service-icon5 {
        background-position: 0 -101px;
      }

      

      .ss {
        width: 52px;
        height: 14px;
        background-size: 180px 139px;
        margin-top: 5px;
      }

      .service1 {
        width: 72px;
        background-position: 0 -108px;
        margin-left: -10px;
      }

      .service2 {
        background-position: -1px -91px;
      }

      .service3 {
        background-position: 0 0;
      }

      .service4 {
        background-position: 0 -54px;
      }

      .service5 {
        background-position: -1px -72px;
      }
    }
  }


`