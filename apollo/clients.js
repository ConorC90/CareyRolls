import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.careyrolls.com',
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
