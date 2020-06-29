import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Head from "next/head";

import Theme from "../styles/core/theme-light";
import Base from "../styles/core/base";

import i18n from "../config/translations";

const RootComponent = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>Jonny Buitrago</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Base />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

RootComponent.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default RootComponent;
