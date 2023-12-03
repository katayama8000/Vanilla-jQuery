import { readFileSync } from 'fs';
import { join } from 'path';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { Resolvers } from '../../../apollo/__generated__/server/resolvers-types';

const typeDefs = readFileSync(
  join(process.cwd(), 'apollo/documents/schema.gql'),
  'utf-8'
);

const userMap = new Map<
  string,
  {
    id: string;
    name: string;
    email: string;
  }
>([
  [
    '1',
    {
      id: '1',
      name: 'John Smith',
      email: 'john@example.com',
    },
  ],
  [
    '2',
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
    },
  ],
]);

const resolvers: Resolvers = {
  Query: {
    users() {
      return Array.from(userMap.values());
    },
    user() {
      return Array.from(userMap.values())[0];
    },
  },
};

const apolloServer = new ApolloServer<Resolvers>({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer);
