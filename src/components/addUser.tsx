import { gql, useMutation } from '@apollo/client';

const ADDUSER = gql(`mutation addUser($name: String!) {
  addUser(name: $name) {
    id
  }
}`);
export const AddUser = () => {
  const [addUser] = useMutation(ADDUSER, {
    refetchQueries: ['GetUser'],
  });

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={async () => {
        await addUser({ variables: { name: 'test' } });
      }}>
      Add User
    </button>
  );
};
