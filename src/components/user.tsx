import { useMutation, useQuery } from '@apollo/client';
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

const ADDUSER = gql(`mutation addUser($name: String!) {
  addUser(name: $name) {
    id
  }
}`);

export const User = () => {
  const { data, loading, error } = useQuery(GETUSER);
  const [addUser] = useMutation(ADDUSER);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button
        onClick={async () => {
          await addUser({ variables: { name: 'test' } });
        }}>
        Add User
      </button>
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
