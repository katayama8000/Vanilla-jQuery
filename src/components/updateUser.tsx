import { gql, useMutation } from '@apollo/client';

const UPDATE_USER = gql(`mutation updateUser($id: ID!, $name: String!) {
  updateUser(id: $id, name: $name) {
    id
  }
}`);

export const UpdateUser = () => {
  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: ['GetUser'],
  });

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={async () => {
        await updateUser({
          variables: {
            id: '1',
            name: 'New name',
          },
        });
      }}>
      Update user
    </button>
  );
};
