import { Box } from "@mui/material";

type Props = {
  size: "big" | "small";
  contents: {
    id: number;
    name: string;
    image?: string;
  };
  selectEvent: (target: "unit" | "sensor" | "report", id: number) => void;
  eventTarget: "unit" | "sensor" | "report";
};

function Card({ size, contents, selectEvent, eventTarget }: Props) {
  return (
    <Box
      onClick={() => selectEvent(eventTarget, contents.id)}
      sx={{
        position: "relative",

        overflow: "hidden",
        cursor: "pointer",

        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },

        ...(size === "big"
          ? {
              borderRadius: "16px 16px 0 0",
              width: 295,
              height: 295,
              margin: "0 10px 32px 0",
              "&:hover": {
                "& .name": {
                  height: 295,
                },
              },
            }
          : {
              width: 200,
              height: 100,
              margin: "0 10px 10px 0",
              "&:hover": {
                "& .name": {
                  borderColor: "#26446D",
                  color: "#26446D",
                },
              },
            }),
      }}
    >
      {size === "big" ? (
        <>
          <img src={`http://localhost:8080${contents.image}`} alt="이미지" />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(51, 51, 51, 0.3)",
            }}
            className="shadow"
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#26446D",
              color: "#FFF",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "12px",
              lineHeight: "14px",
              transition: "0.35s",
            }}
            className="name"
          >
            {contents.name}
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#333",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "19px",
              border: "1px solid #EEEEEE",
              boxSizing: "border-box",
            }}
            className="name"
          >
            {contents.name}
          </Box>
        </>
      )}
    </Box>
  );
}

export default Card;
