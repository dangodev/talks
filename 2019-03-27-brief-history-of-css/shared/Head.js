import React from 'react';
import { Global, css } from '@emotion/core';
import book from '../assets/400.woff';
import medium from '../assets/500.woff';
import bold from '../assets/700.woff';

export default () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'tfjm';
        font-weight: 400;
        src: url(${book});
      }
      @font-face {
        font-family: 'tfjm';
        font-weight: 500;
        src: url(${medium});
      }
      @font-face {
        font-family: 'tfjm';
        font-weight: 700;
        src: url(${bold});
      }
    `}
  />
);
