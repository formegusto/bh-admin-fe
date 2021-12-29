import React from "react";
import { ConnectedProps } from "react-redux";
import AppMgmtComponent from "src/components/app-mgmt";
import ApiApplicationConnector from "src/store/apiApplication/connector";

interface Props extends ConnectedProps<typeof ApiApplicationConnector> {}

function AppMgmtContainer({ getApplications }: Props) {
  React.useEffect(() => {
    getApplications(null);
  }, [getApplications]);

  return <AppMgmtComponent />;
}

export default ApiApplicationConnector(AppMgmtContainer);
