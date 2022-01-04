import React from "react";
import { ConnectedProps } from "react-redux";
import DataMgmtComponent from "src/components/data-mgmt";
import InformationConnector from "src/store/information/connector";

interface Props extends ConnectedProps<typeof InformationConnector> {}

function DataMgmtContainer({
  sessionCert,
  getInfos,
  buildings,
  units,
  sensors,
}: Props) {
  React.useEffect(() => {
    if (sessionCert && !buildings) {
      getInfos({
        target: "building",
      });
    }
  }, [sessionCert, buildings, getInfos]);

  const selectEvent = React.useCallback(
    (target: "unit" | "sensor" | "report", id: number) => {
      getInfos({
        target: target,
        rootId: id,
      });
    },
    [getInfos]
  );

  return (
    <DataMgmtComponent
      buildings={buildings}
      units={units}
      sensors={sensors}
      selectEvent={selectEvent}
    />
  );
}

export default InformationConnector(DataMgmtContainer);
