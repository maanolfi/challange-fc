import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 100px;
  background-color: #34495e;
  padding: 0 20px;
  color: #fff;

  .logo {
    line-height: 100px;
    float: left;
    text-transform: uppercase;
  }

  ul {
    float: right;
    line-height: 100px;

    a {
      color: #fff;
      text-transform: uppercase;
      padding: 0 10px;
      transition: 0.4s;

      :hover {
        color: #3498db;
      }
    }
  }

  .show-menu-btn,
  .hide-menu-btn {
    transition: 0.4s;
    font-size: 30px;
    cursor: pointer;
    display: none;
  }

  .show-menu-btn {
    float: right;

    svg {
      margin-top: 50%;
      line-height: 100px;
    }
  }

  input[type='checkbox'] {
    position: absolute;
    visibility: hidden;
    z-index: -1111;
  }

  @media screen and (max-width: 798px) {
    .show-menu-btn,
    .hide-menu-btn {
      display: block;
    }
    .menu {
      position: fixed;
      width: 100%;
      height: 100vh;
      background-color: #333;
      right: -100%;
      top: 0;
      text-align: center;
      padding: 80px 0;
      line-height: normal;
      transition: 0.7s;

      a {
        display: block;
        padding: 20px;
      }
    }

    .hide-menu-btn {
      position: absolute;
      top: 40px;
      right: 40px;
    }
    #chk:checked ~ .menu {
      right: 0;
    }
  }
`;
