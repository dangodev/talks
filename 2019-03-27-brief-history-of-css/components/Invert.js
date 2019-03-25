import React from 'react';
import Head from '../shared/Head';

export default ({ children }) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: '#111',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      width: '100vw',
    }}
  >
    <Head />
    {children}
  </div>
);
