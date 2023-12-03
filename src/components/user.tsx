import { useQuery } from '@apollo/client';
import { gql } from '../../apollo/__generated__/client';

const ALL_USERS = gql(`query ALL_USERS {
  users {
    name
  }
  user {
    name
  }
}`);

export const User = () => {
  const { data, loading, error } = useQuery(ALL_USERS);
  if (loading) {
    return <div>読み込み中</div>;
  }
  return (
    <div>
      {error && <div>{error.message}</div>}
      <ul>
        {data && data.users.map((v, i) => <li key={String(i)}>{v.name}</li>)}
        {data && data.user && <li>{data.user.name}</li>}
      </ul>
    </div>
  );
};
