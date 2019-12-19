import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 30px auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  height: auto;

  form {
    padding: 3%;

    hr {
      border: 0;
      height: 1px;
      background-color: #ccc;
      margin: 10px 0 20px;
    }

    input {
      width: 100%;
      height: 45px;
      background: #ffffff;
      border: 1px solid #dddddd;
      box-sizing: border-box;
      border-radius: 4px;
      padding-left: 15px;
      margin-top: 5px;
    }

    textarea {
      width: 100%;
      height: 45px;
      background: #ffffff;
      border: 1px solid #dddddd;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 5px;
    }

    select {
      margin-top: 10px;
      width: 30%;
      background-color: #fff;
      border: 1px solid #dddddd;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 10px;

      button {
        background-color: #ee4d64;
        width: 150px;
        height: 45px;
        margin-top: 10px;
        margin-top: 10px;
        color: #fff;
        text-transform: uppercase;
        &:hover {
          background-color: ${darken(0.1, '#EE4D64')};
        }
      }
    }
  }
`;
