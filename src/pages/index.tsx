import { ConnectedProps } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import AuthConnector from "../store/auth/connector";
import BaseTemplate from "../templates/BaseTemplate";
import AppMgmtPage from "./AppMgmtPage";
import AuthPage from "./AuthPage";
import DataMgmtPage from "./DataMgmtPage";
import UserMgmtPage from "./UserMgmtPage";

const routes = (auth: string | null) => [
  {
    path: "/",
    element: auth ? <BaseTemplate /> : <Navigate to="/auth" />,
    children: [
      { path: "user-mgmt", element: <UserMgmtPage /> },
      { path: "app-mgmt", element: <AppMgmtPage /> },
      { path: "data-mgmt", element: <DataMgmtPage /> },
    ],
  },
  {
    path: "/auth",
    element: auth ? <Navigate to="/user-mgmt" /> : <AuthPage />,
  },
];

function Routing({ auth }: ConnectedProps<typeof AuthConnector>) {
  const routing = useRoutes(routes(auth));

  return <>{routing}</>;
}

export default AuthConnector(Routing);
