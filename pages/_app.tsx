import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'mobx-react';
import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import projectStore from '../stores/project';

export default function MyApp({ Component, pageProps }) {
  const customTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#3aa0b2',
      },
    },
  });

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Provider projectStore={projectStore}>
        <MuiThemeProvider theme={customTheme}>
          <ThemeProvider theme={customTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>
    </>
  );
}
