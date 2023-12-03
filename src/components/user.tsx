import { AddUser } from './addUser';
import { UpdateUser } from './updateUser';
import { DeleteUser } from './deleteUser';
import { ListUser } from './listUser';

export const User = () => {
  return (
    <div>
      <ListUser />
      <AddUser />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
};
