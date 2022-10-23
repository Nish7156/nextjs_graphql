import '../styles/globals.css'
import type { AppProps } from 'next/app'
import StrapiApolloProvider from '../Graphql/Apollo'

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />
  // </StrapiApolloProvider>

}

export default MyApp
