import { Box, Typography } from "@mui/material";
import Card from "./Card";

type Props = {
  title: string;
  size: "big" | "small";
  datas: {
    id: number;
    name: string;
    image?: string;
  }[];
  selectEvent: (target: "unit" | "sensor" | "report", id: number) => void;
  eventTarget: "unit" | "sensor" | "report";
};

function CardGroup({ title, size, datas, selectEvent, eventTarget }: Props) {
  return (
    <>
      <Typography
        variant="subtitle1"
        sx={{
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 18,
          lineHeight: "21px",
          padding: "16px 0px",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          minWidth: "1000px",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {datas.map((d) => (
          <Card
            size={size}
            contents={d}
            selectEvent={selectEvent}
            eventTarget={eventTarget}
          />
        ))}
      </Box>
    </>
  );
}

export default CardGroup;
