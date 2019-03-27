import React from 'react';
import { Global, css } from '@emotion/core';
import book from '../assets/400.woff';
import bookItalic from '../assets/400-italic.woff';
import medium from '../assets/500.woff';
import mediumItalic from '../assets/500-italic.woff';
import bold from '../assets/700.woff';
import boldItalic from '../assets/700-italic.woff';

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
        font-weight: 400;
        font-style: italic;
        src: url(${bookItalic});
      }
      @font-face {
        font-family: 'tfjm';
        font-weight: 500;
        src: url(${medium});
      }
      @font-face {
        font-family: 'tfjm';
        font-weight: 500;
        font-style: italic;
        src: url(${mediumItalic});
      }
      @font-face {
        font-family: 'tfjm';
        font-weight: 700;
        src: url(${bold});
      }
      @font-face {
        font-family: 'tfjm';
        font-weight: 700;
        font-style: italic;
        src: url(${boldItalic});
      }
    `}
  />
);
