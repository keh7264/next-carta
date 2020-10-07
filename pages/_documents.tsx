import { ServerStyleSheets as MaterialUiSheets } from '@material-ui/core/styles';
import Document, { DocumentContext, Html, Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet as styledComponentsSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // eslint-disable-next-line new-cap
    const styledComponentSheet = new styledComponentsSheet();
    const materialUiSheets = new MaterialUiSheets();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        });
      const initialProps = await Document.getInitialProps(ctx);

      const styledStyles = styledComponentSheet.getStyleElement();
      const materialStyles = materialUiSheets.getStyleElement();
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialStyles}
            {styledStyles}
          </>
        ),
      };
    } catch (error) {
      console.error(error);
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script src="https://polyfill.io/v3/polyfill.min.js?features=es2019%2Ces2018%2Ces2017%2Ces2016%2Ces2015%2Cdefault%2Ces6%2Ces7" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
