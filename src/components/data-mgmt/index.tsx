import { Building, Report, Sensor, Unit } from "src/store/information/types";
import CardGroup from "../common/Card/CardGroup";
import ReportTable from "./ReportTable";

type Props = {
  buildings?: Building[] | null;
  units?: Unit[] | null;
  sensors?: Sensor[] | null;
  reports?: Report[] | null;
  selectEvent: (target: "unit" | "sensor" | "report", id: number) => void;
};

function DataMgmtComponent({
  buildings,
  units,
  sensors,
  selectEvent,
  reports,
}: Props) {
  return (
    <>
      {buildings && (
        <CardGroup
          title="건물"
          size="big"
          datas={buildings}
          selectEvent={selectEvent}
          eventTarget="unit"
        />
      )}
      {units && (
        <CardGroup
          title="호"
          size="small"
          datas={units}
          selectEvent={selectEvent}
          eventTarget="sensor"
        />
      )}
      {sensors && (
        <CardGroup
          title="센서"
          size="small"
          datas={sensors}
          selectEvent={selectEvent}
          eventTarget="report"
        />
      )}
      {reports && <ReportTable report={reports} />}
    </>
  );
}

export default DataMgmtComponent;
