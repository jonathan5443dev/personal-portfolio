import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import Head from "next/head";
import LightTheme from "../styles/core/theme-light";
import DarkTheme from "../styles/core/theme-dark";
import Base from "../styles/core/base";

import i18n from "../config/translations";

const RootComponent = ({ Component, pageProps }) => {
  const [useDarkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!useDarkTheme);

  return (
    <ThemeProvider theme={useDarkTheme ? DarkTheme : LightTheme}>
      <Head>
        <title>Jonny Buitrago</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Base />
      <Component />
      <button onClick={toggleTheme}>Toggle theme</button>
    </ThemeProvider>
  );
};

RootComponent.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any.isRequired
};

export default RootComponent;
