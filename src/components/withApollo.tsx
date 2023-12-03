import { ApolloProvider } from '@apollo/client';
import { client } from '../../apollo/client';

export const WithApollo = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
