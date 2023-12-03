import { AddUser, UpdateUser, DeleteUser } from './button';
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
