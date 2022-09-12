import { Html, Head, Main, NextScript } from 'next/document';
import { Global } from '@emotion/react';

/**
 * Overrides the default Next document component
 *
 * @returns a document component
 */
const Document = () => (
  <Html lang="en">
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <Global
        styles={{
          'html, body, #__next': {
            height: '100%',
            width: '100%',
            backgroundColor: '#28282c',
            color: '#fff',
          },
          '*': {
            padding: 0,
            margin: 0,
            boxSizing: 'border-box',
          },
          a: {
            color: '#53d670',
            '&:hover': {
              textDecoration: 'none',
            },
            '&:focus': {
              borderRadius: 4,
              outline: '2px solid #fff',
              outlineOffset: 4,
            },
          },
          '.no-scroll': {
            overflow: 'hidden',
            position: 'fixed',
            width: '100%',
          },
        }}
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
