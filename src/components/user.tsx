import { useQuery } from '@apollo/client';
import { gql } from '../../apollo/__generated__/client';

const USERS = gql(`query USERS {
  users {
    name
    age
  }
  user {
    name
    age
  }
}`);

export const User = () => {
  const { data, loading, error } = useQuery(USERS);
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
                name: {v.name}/ age: {v.age}
              </li>
            ))}
        </ul>
        {data && data.user && (
          <ol>
            <li>
              name: {data.user.name}/ age: {data.user.age}
            </li>
          </ol>
        )}
      </ul>
    </div>
  );
};
