import React from "react";
import { ConnectedProps } from "react-redux";
import AppMgmtComponent from "src/components/app-mgmt";
import ApiApplicationConnector from "src/store/apiApplication/connector";
import { GetApplicationsResponse } from "src/store/apiApplication/types";

interface Props extends ConnectedProps<typeof ApiApplicationConnector> {}

function AppMgmtContainer({ getApplications, applications }: Props) {
  const [resApplications, setResApplications] =
    React.useState<GetApplicationsResponse | null>();

  React.useEffect(() => {
    setResApplications(applications);
  }, [applications]);

  React.useEffect(() => {
    getApplications(null);
  }, [getApplications]);

  return <AppMgmtComponent resApplications={resApplications} />;
}

export default ApiApplicationConnector(AppMgmtContainer);
