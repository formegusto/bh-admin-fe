import React from "react";
import { ConnectedProps } from "react-redux";
import UserMgmtComponent from "src/components/user-mgmt";
import UserConnector from "src/store/user/connector";

interface Props extends ConnectedProps<typeof UserConnector> {}
function UserMgmtContainer({ getUserList, users }: Props) {
  React.useEffect(() => {
    getUserList(null);
  }, [getUserList]);

  return <UserMgmtComponent resUsers={users} />;
}

export default UserConnector(UserMgmtContainer);
