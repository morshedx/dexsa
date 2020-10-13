import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import GlobalStyle from 'assets/styles/global-styles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
