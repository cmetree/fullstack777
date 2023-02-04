import React from 'react';
import { css } from '@emotion/react';

export function Notice(props) {
  const { notice } = props;

  return (
    <div
      css={css`
        padding-top: 20px;
        text-align: center;
      `}
    >
      <h2
        css={css`
          font-size: 20px;
          color: red;
        `}
      >
        <b>[공지사항]</b>
      </h2>
      {notice.map((x, idx) => (
        <p key={idx} style={{color:'blue'}}>{x.message}</p>
      ))}
    </div>
  );
}
