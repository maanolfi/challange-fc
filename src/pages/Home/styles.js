import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
`;

export const ContainerLeft = styled.div`
  grid-column: 1 / 2;
  padding: 10px;

  button {
    background-color: #fff;
    color: #222;
    width: 100%;
    height: auto;
    margin: 8px 0;
    padding: 3px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

    transition: background 0.2s;

    &:hover {
      background-color: ${darken(0.1, '#ccc')};
    }
  }
`;

export const ContainerRight = styled.div`
  grid-column: 2 / 3;
  padding: 18px;

  div {
    background-color: #fff;
    height: auto;
    padding: 30px;
    max-width: 600px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;

    p {
      color: #222;
      font-size: 80%;
      margin: 2px 0;
    }

    button {
      background-color: #ee4d64;
      border-radius: 4px;
      height: 45px;
      margin-top: 10px;
      color: #fff;
      text-transform: uppercase;
      &:hover {
        background-color: ${darken(0.1, '#EE4D64')};
      }
    }

    span {
      margin: 20px 0;
      word-wrap: break-word;
    }
  }
`;
