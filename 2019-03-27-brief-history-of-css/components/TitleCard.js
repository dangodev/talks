import React from 'react';
import { Head } from 'mdx-deck';
import { Global } from '@emotion/core';
import SharedHead from '../shared/Head';
import favicon from '../assets/favicon.ico';

// Note: The Google Fonts necessary for this page are loaded in theme.js
// (it seems to be loaded sooner that way)

const styles = `
.intro-card           {font-size:16px;position:absolute;top:0;left:0;width:100vw;}
.intro-card h1        {font-family:serif;letter-spacing:0;text-transform:none;}

.intro-card svg       {display:none;height:auto;width:128px;position:absolute;}
.intro-card .break    {display:block}
.intro-card .center   {text-align:center}
.intro-card .bg1      {background-color:floralwhite}
.intro-card .bg2      {background-image:repeating-linear-gradient(45deg,mistyrose,mistyrose 8px,transparent 8px,transparent 16px);background-repeat:repeat,no-repeat;}
.intro-card .bg3      {background-image:repeating-linear-gradient(45deg,mistyrose,mistyrose 12px,transparent 12px,transparent 24px);background-repeat:repeat,no-repeat;}
.intro-card .bg4      {background-image:repeating-linear-gradient(45deg,oldlace,oldlace 12px,transparent 12px,transparent 24px);background-repeat:repeat,no-repeat;}
.intro-card .bg5      {background-image:repeating-linear-gradient(45deg,snow,snow 12px,transparent 12px,transparent 24px);background-repeat:repeat,no-repeat;}
.intro-card .bg6      {background-image:repeating-linear-gradient(45deg,snow,snow 12px,transparent 12px,transparent 24px),linear-gradient(white,rebeccapurple);background-repeat:repeat,no-repeat;}
.intro-card .bg7      {background-image:repeating-linear-gradient(45deg,snow,snow 12px,transparent 12px,transparent 24px),linear-gradient(white,powderblue);background-repeat:repeat,no-repeat;}
.intro-card .bg8      {background-image:repeating-linear-gradient(45deg,snow,snow 12px,transparent 12px,transparent 24px),linear-gradient(white,paleturquoise);background-repeat:repeat,no-repeat;}
.intro-card .color1   {opacity:0.8}
.intro-card .color2   {color:dodgerblue}
.intro-card .font1    {font-family:Arial,sans-serif}
.intro-card .font2    {font-family:"Verdana"}
.intro-card .font3    {font-family:Georgia}
.intro-card .font4    {font-family:"Merriweather"}
.intro-card .font5    {font-family:Impact}
.intro-card .font6    {font-family:"Lato"}
.intro-card .font7    {font-family:"Roboto"}
.intro-card .font8    {font-family:"Open Sans"}
.intro-card .font9    {font-family:"Montserrat"}
.intro-card .font10   {font-family:"Raleway"}
.intro-card .font11   {font-family:"Oswald"}
.intro-card .font12   {font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}
.intro-card .font0    {font-family:"Yanone Kaffeesatz"}
.intro-card .gray     {color:cadetblue}
.intro-card .shrink   {font-size:0.625em}
.intro-card .grow     {font-size:48px}
.intro-card .space    {margin-top:0.5em}
.intro-card .align1   {height:25vh;align-items:center;display:flex;justify-content:center;}
.intro-card .align2   {height:45vh;}
.intro-card .align3   {height:125vh;}
.intro-card .align4   {height:105vh;}
.intro-card .align5   {height:99vh;}
.intro-card .align6   {height:100vh;}
.intro-card .align7   {height:101vh;}
.intro-card .align8   {height:100vh;}
.intro-card .unbold   {font-weight:400}
.intro-card .shadow1  {text-shadow:1px 1px rgba(0,0,0,0.3)}
.intro-card .shadow2  {text-shadow:2px 2px rgba(0,0,0,0.2)}
.intro-card .shadow3  {text-shadow:3px 3px rgba(0,0,0,0.15)}
.intro-card .shadow4  {text-shadow:4px 4px rgba(0,0,0,0.12)}
.intro-card .shadow5  {text-shadow:5px 5px rgba(0,0,0,0.08)}
.intro-card .shadow6  {text-shadow:6px 6px rgba(0,0,0,0.05)}
.intro-card .shadow7  {text-shadow:4px 4px rgba(0,0,0,0.12),-4px -4px rgba(255,255,255,0.5)}
.intro-card .shadow8  {text-shadow:3px 3px rgba(0,0,0,0.15),-3px -3px rgba(255,255,255,0.5)}
.intro-card .shadow9  {text-shadow:2px 2px rgba(0,0,0,0.15),-2px -2px rgba(255,255,255,0.5)}
.intro-card .shadow10 {text-shadow:2px 2px rgba(0,0,0,0.1),-2px -2px rgba(255,255,255,0.5)}
.intro-card .sticker1 {display:block}
.intro-card .sticker2 {left:50%;top:50%;transform:translate(-50%,-50%)}
.intro-card .sticker3 {left:calc(4em + 50%);top:calc(50% - 0em);}
.intro-card .sticker4 {left:calc(10em + 50%);top:calc(50% - 0em);}
.intro-card .sticker5 {left:calc(24em + 50%);top:calc(50% - 0em);}
.intro-card .sticker6 {left:calc(22em + 50%);top:calc(50% - 0em);}
.intro-card .sticker7 {left:calc(20em + 50%);top:calc(50% - 1em);}
.intro-card .sticker8 {left:calc(20em + 50%);top:calc(50% - 2em);}
.intro-card .sticker9 {left:calc(20em + 50%);top:calc(50% - 2.05em);}
.intro-card .sticker10{left:calc(20em + 50%);top:calc(50% - 2.1em);}
`;

export default class TitleCard extends React.Component {
  componentDidMount() {
    /* Settings */

    const interval = 150;
    const classes = [
      ['color1', 'div'],
      ['color2', 'span'],
      ['break', 'small'],
      ['center', 'h1'],
      ['shrink', 'small'],
      ['gray', 'small'],
      ['space', 'small'],
      ['unbold', 'small'],
      ['font1', 'h1'],
      ['font2', 'h1'],
      ['grow', 'h1'],
      ['align1', 'div'],
      ['align2', 'div'],
      ['align3', 'div'],
      ['align4', 'div'],
      ['align5', 'div'],
      ['align6', 'div'],
      ['align7', 'div'],
      ['align8', 'div'],
      ['bg1', 'div'],
      ['bg2', 'div'],
      ['bg3', 'div'],
      ['bg4', 'div'],
      ['bg5', 'div'],
      ['bg6', 'div'],
      ['bg7', 'div'],
      ['bg8', 'div'],
      ['sticker1', 'svg'],
      ['sticker2', 'svg'],
      ['sticker3', 'svg'],
      ['sticker4', 'svg'],
      ['sticker5', 'svg'],
      ['sticker6', 'svg'],
      ['sticker7', 'svg'],
      ['sticker8', 'svg'],
      ['sticker9', 'svg'],
      ['sticker10', 'svg'],
      ['font3', 'h1'],
      ['font4', 'h1'],
      ['font5', 'h1'],
      ['font6', 'h1'],
      ['font7', 'h1'],
      ['font8', 'h1'],
      ['font9', 'h1'],
      ['font10', 'h1'],
      ['font11', 'h1'],
      ['font12', 'h1'],
      ['font0', 'h1'],
      ['shadow1', 'h1'],
      ['shadow2', 'h1'],
      ['shadow3', 'h1'],
      ['shadow4', 'h1'],
      ['shadow5', 'h1'],
      ['shadow6', 'h1'],
      ['shadow7', 'h1'],
      ['shadow8', 'h1'],
      ['shadow9', 'h1'],
      ['shadow10', 'h1'],
    ];

    /* Methods */

    function nextStep(i) {
      const [className, selector] = classes[i];
      document
        .querySelector(`.intro-card ${selector}`)
        .classList.add(className);
    }

    function clearClasses() {
      classes.forEach(([className, selector]) => {
        document
          .querySelector(`.intro-card ${selector}`)
          .classList.remove(className);
      });
    }

    this.count = 0;

    this.animation = setInterval(() => {
      if (classes[this.count]) {
        nextStep(this.count);
        this.count += 1;
      } else {
        clearClasses();
        this.count = 0;
      }
    }, interval);
  }

  componentWillUnmount() {
    clearInterval(this.animation);
  }

  render() {
    return (
      <div className="intro-card">
        <div>
          <SharedHead />
          <Global styles={styles} />
          <Head>
            <style>{styles}</style>
            <title>A Brief History of CSS</title>
            <link rel="shortcut icon" href={favicon} />
          </Head>
          <h1>
            <span>A Brief History of CSS</span>
            <small>
              CSS styling in 2019, from 2.0 to BEM to Styled Components
            </small>
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362.67 336.55">
            <defs>
              <linearGradient
                id="dark-green"
                x1="162.49"
                y1="63.4"
                x2="46.09"
                y2="-239.84"
                gradientTransform="rotate(-166.22 165.907 62.257)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".01" stopColor="#095f00" />
                <stop offset="1" stopColor="#5ddf00" />
              </linearGradient>
              <linearGradient
                id="light-green"
                x1="115.25"
                y1="74.99"
                x2="176.82"
                y2="159.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fff" />
                <stop offset="1" stopColor="#00b300" />
              </linearGradient>
            </defs>
            <path
              d="M138.1 331.6l-11-23.62-20.68 12.68-6.42-25.24-22.66 8.67-1.69-26-23.86 4.36 3.11-25.86-24.26-.1 7.82-24.85-23.83-4.56 12.25-23-22.57-8.85 16.26-20.35L0 162c5.47-4.69 223.35-146.72 226.09-152 12.33.7 15.53-3.84 24.78-10l11.78 15.33 22.66-8.67 1.69 26 23.86-4.36-3.12 25.86 24.27.1-7.82 24.85L348 83.67l-12.25 23 22.59 8.86-16.27 20.35 20.58 12.86-19.73 17 17.86 16.42-22.52 13.1 14.54 19.42-24.54 8.74L339 245.18l-25.73 4.08 6.54 23.37-26-.72 2.13 24.17-25.46-5.49-2.34 24.15-24-10.08-6.79 23.34-21.76-14.32-10.91 21.67-18.76-18.07-14.7 19.3-15.12-21.24z"
              fill="url(#dark-green)"
              fillRule="evenodd"
            />
            <text
              transform="translate(96.28 209.56)"
              fontSize="98.23"
              fill="#fff"
              fontFamily="Impact"
            >
              NEW
            </text>
            <path
              d="M46.87 155.61c15.61-17.31 27 2.52 33.14 8.45l10.91-21.67 21.76 14.32 6.74-23.31 24 10.08 2.34-24.15 25.46 5.49-2.13-24.17 26 .72L188.61 78l25.72-4.09-10.72-21.75c2.87-8.36 10.59-13.28 18.1-14.32-5.81-9.51-.36-20.21 2.54-25.77l1.84-2.07S-1.71 161.78 14.43 152.17s31.47-3.36 32.44 3.44z"
              fill="url(#light-green)"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  }
}
