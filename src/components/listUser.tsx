import { useQuery } from '@apollo/client';
import { gql } from '../../apollo/__generated__/client';

const LIST_USER = gql(`query listUser {
  users {
    id
    name
    email
  }
}`);

export const ListUser = () => {
  const { data, loading, error } = useQuery(LIST_USER, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {error && <div>{error.message}</div>}
      <ul>
        {data &&
          data.users.map((v, i) => (
            <li key={String(i)}>
              name: {v.name}/ email: {v.email}
            </li>
          ))}
      </ul>
    </div>
  );
};
