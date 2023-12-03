import { readFileSync } from 'fs';
import { join } from 'path';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { Resolvers } from '../../../apollo/__generated__/server/resolvers-types';

const typeDefs = readFileSync(
  join(process.cwd(), 'apollo/documents/schema.gql'),
  'utf-8'
);

const userMap = new Map<string, { name: string; age?: number }>([
  ['bob', { name: 'bob', age: 19 }],
  ['john', { name: 'john' }],
  ['mike', { name: 'mike', age: 21 }],
  ['zakk', { name: 'zakk', age: 18 }],
]);

const resolvers: Resolvers = {
  Query: {
    users() {
      return Array.from(userMap.values());
    },
    user() {
      return userMap.values().next().value;
    },
  },
};

const apolloServer = new ApolloServer<Resolvers>({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer);
