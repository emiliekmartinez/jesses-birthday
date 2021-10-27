/** @jsx jsx */

import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@emotion/react'

import { jsx, Themed } from 'theme-ui';
import Theme from '../gatsby-plugin-theme-ui/index';

// @ts-ignore
import seoShare from '../assets/images/jesse-emilie.jpg';

// @ts-ignore
import favicon from '../assets/logos/favicon.png';

const Layout = ({ children }: any) => {
  const title = 'Happy 30th birtheday Jesse!';
  const metaDescription = "You haven't hit your peak yet – we promise";

  return (
    <ThemeProvider theme={Theme}>
      <Helmet
        title={title}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: 'emiliekmartinez'
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ]}
      >
      <link rel="icon" href={favicon} />
    </Helmet>
    {children}
    </ThemeProvider>
)};

export default Layout;
