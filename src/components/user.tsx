import { useQuery } from '@apollo/client';
import { gql } from '../../apollo/__generated__/client';

const GETUSER = gql(`query GetUser {
  user {
    id
    name
    email
  }
  users {
    id
    name
    email
  }
}`);

export const User = () => {
  const { data, loading, error } = useQuery(GETUSER);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {error && <div>{error.message}</div>}
      <ul>
        <ul>
          {data &&
            data.users.map((v, i) => (
              <li key={String(i)}>
                name: {v.name}/ email: {v.email}
              </li>
            ))}
        </ul>
        {data && data.user && (
          <ol>
            <li>
              name: {data.user.name}/ email: {data.user.email}
            </li>
          </ol>
        )}
      </ul>
    </div>
  );
};
