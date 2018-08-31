import Document, { Head, Main, NextScript } from 'next/document'
import { ThemeProvider, ServerStyleSheet } from 'styled-components'
import '../style.css'
import theme from '../components/system/theme'
import 'tachyons'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' />
          {this.props.styleTags}
        </Head>
        <ThemeProvider theme={theme}>
          <body className='font'>
            <Main />
            <NextScript />
          </body>
        </ThemeProvider>
      </html>
    )
  }
}
