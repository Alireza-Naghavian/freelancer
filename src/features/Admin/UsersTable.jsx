import Empty from "../../pages/Empty";
import Table from "../../ui/Table";
import Loader from "../../utils/Loader";
import UsersRow from "./UsersRow";
import useUserList from "./hooks/UseUsersList";

function UsersTable() {
  const { users ,isLoading} = useUserList();
  if(isLoading) return <Loader/>
  console.log(users);
  if (!users.length) return <Empty resourceName="درخواستی" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام </th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => {
          return (
            <UsersRow
              key={user._id}
              user={user}
              index={index}
            />
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
