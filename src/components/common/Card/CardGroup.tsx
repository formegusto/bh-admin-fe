import { Box, Typography } from "@mui/material";
import Card from "./Card";
import dongshinLibrary from "src/assets/동신대학교 중앙도서관.png";

type Props = {
  title: string;
  size: "big" | "small";
};

function CardGroup({ title, size }: Props) {
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
        {Array.from({ length: 12 }).map(() => (
          <Card
            size={size}
            contents={{
              name: "동신대학교 중앙도서관",
              image: dongshinLibrary,
            }}
          />
        ))}
      </Box>
    </>
  );
}

export default CardGroup;
