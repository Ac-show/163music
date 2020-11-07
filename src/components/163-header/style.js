import styled from 'styled-components'


const HeaderWrapper = styled.div`
  height: 70px;
  background-color: #242424;

  a {
    color: #cccccc;
  }

  a:hover {
    color: #ffffff;
    text-decoration: none;
  }

  .context {
    width: 1100px;
    margin: 0 auto;
    height: 75px;
    display: flex;
    justify-content: space-between;
  }

  .left {
    display: flex;

    a {
      display: block;
      height: 70px;
      line-height: 70px;
      padding: 0 19px;
      font-size: 14px;
    }

    a:hover {
      background-color: #000000;
    }

    .flag-icon {
      position: relative;
    }

    .friend-icon{
      content: '';
      position: absolute;
      top: 24px;
      right: 7px;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      background: #C20C0C;
    }

    .hot-icon{
      content: '';
      position: absolute;
      top: 20px;
      right: -20px;
      width: 28px;
      height: 19px;
      background-position: -190px 0;
    }

    .logo {
      width: 177px;
      height: 69px;
      background-position: 0 0;
    }
  }

  .right {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70px;

    .search {
      font-size: 12px;
      box-sizing: border-box;
      color: #333;
      background-color: #fff;
      border-radius: 32px;
      width: 158px;
      height: 32px;
      outline: none;
      padding-left: 30px;
      background-position: 0 -99px;
    }

    .create-center {
      display: block;
      text-align: center;
      width: 90px;
      height: 32px;
      border: 1px solid #4F4F4F;
      line-height: 33px;
      color: #ccc;
      border-radius: 20px;
      margin-left: 12px;
    }

    .create-center:hover {
      color: #ffffff;
      border-color: #ffffff;
    }

    .login {
      color: #787878;
      margin: 0 22px 0 19px;
    }

    .login:hover {
      color: #ccc;
    }
  }

  .active {
    position: relative;
    background-color: #000000;
    color: #ffffff;
  }
  .active::after {
    content: '';
    position: absolute;
    border: 6px solid transparent;
    border-bottom: 8px solid #C20C0C;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%)
  }

  .underline {
    background-color: #C20C0C;
    height: 5px;
    transform: translateY(-5px);
  }
  
`

export default HeaderWrapper