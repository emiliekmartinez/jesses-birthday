/** @jsx jsx */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
import { jsx, Themed } from 'theme-ui';
import Theme from '../gatsby-plugin-theme-ui/index';

// @ts-ignore
import favicon from '../assets/logos/favicon.png';

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <html lang="en" />
        <link rel="icon" href={favicon} />
      </Helmet>
      {children}
  </ThemeProvider>
)};

export default Layout;
