import { useAuth0 } from "@auth0/auth0-react";
import { useCreateUserMutation, useDeleteUsersMutation, useGetUsersQuery } from "../reducers/user.reducer";
import UserTable from "../components/user/UserTable";
import UserForm from "../components/user/UserForm";
import { useState } from "react";

const UBMOperations = () => {
  const { user } = useAuth0();
  const { data } = useGetUsersQuery();
  const [createUser] = useCreateUserMutation();
  const [deleteUsers] = useDeleteUsersMutation();
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  const handleDeleteSelected = async () => {
    if (selectedUserIds?.ids?.size === 0) return;
    try {
      await deleteUsers({ ids: Array.from(selectedUserIds?.ids) }).unwrap();
      setSelectedUserIds([]);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>⚙ UBM Operations</h2>
      <p>Welcome, {user.name}</p>
      <UserForm createUser={createUser} />
      <UserTable data={data} selectedUserIds={selectedUserIds} setSelectedUserIds={setSelectedUserIds} handleDeleteSelected={handleDeleteSelected} />
    </div>
  );
};

export default UBMOperations;
