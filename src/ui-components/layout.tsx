/** @jsx jsx */

import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import { jsx, Themed } from 'theme-ui';
import Theme from '../gatsby-plugin-theme-ui/index';

import './layout.scss';

import '../global.scss';

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
