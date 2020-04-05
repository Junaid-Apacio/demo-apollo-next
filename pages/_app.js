import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Layout from '../components/Layout/Layout'

import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../util/apollo-client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const theme = {
  primaryColor: 'teal'
}
const GlobalStyles = createGlobalStyle`
`

class MyApp extends App {
  render () {
    const { Component, pageProps, apollo } = this.props
    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>

    )
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp)
