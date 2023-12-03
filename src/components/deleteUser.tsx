import { gql, useMutation } from '@apollo/client';

const DELETE_USER = gql(`
    mutation DeleteUser($id: ID!) {
        deleteUser(id: $id) {
        id
        }
    }
    `);
export const DeleteUser = () => {
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: ['listUser'],
  });
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={async () => {
        await deleteUser({
          variables: {
            id: '1',
          },
        });
      }}>
      Delete user
    </button>
  );
};
