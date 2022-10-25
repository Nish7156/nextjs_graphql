import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'ad18c621fa36f7a7c49f4d8da66c20f30920e407e14e8938cd6981dda8af010e1d9cbc95bc9163e3c58b5d688b95352d3ce79cffc5dc3ba6b2d84b4a51f26dda6c0231cd519666f144a75d4e85a1f112a71d0d0458b3680ed2644b251d675be808c13e16064390363a8ac3827d24adde0397e9ef09d835b62c496530800f8eed'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  export default client 
