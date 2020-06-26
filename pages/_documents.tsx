import { ServerStyleSheets as MaterialUiSheets } from "@material-ui/core/styles";
import Document, { DocumentContext } from "next/document";
import React from "react";
import { ServerStyleSheet as styledComponentsSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new styledComponentsSheet();
    const materialUiSheets = new MaterialUiSheets();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentSheet.collectStyles(
            materialUiSheets.collect(<App {...props} />)
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    const styles = styledComponentSheet.getStyleElement();
    const materialStyles = materialUiSheets.getStyleElement();
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {materialStyles}
          {styles}
        </>
      ),
    };
  }
}

export default MyDocument;
