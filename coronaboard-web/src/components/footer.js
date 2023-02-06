import React from 'react';
import { css } from '@emotion/react';
import { Container } from 'react-bootstrap';

export function Footer() {
  return (
    <div
      css={css`
        color: white;
        background-color: black;
        text-align: center;
      `}
    >
      <Container
        css={css`
          padding: 36px 0;
        `}
      >
        <b>❤️2023년 다 잘 되실 겁니다.❤️ <br/>Copied by Whocdin(Shim gyu Tae) from coronaboard.kr</br>Contact Info_whocdin@gmail.com</b>
      </Container>
    </div>
  ); 
}
