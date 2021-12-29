import { Box, Button, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import ketiLogo from "../../assets/logo/keti logo horizontal kor.png";

function AuthComponent() {
  return (
    <Box
      sx={{
        position: "relative",

        height: "100vh",
        minHeight: "700px",
        backgroundColor: blue[100],

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={ketiLogo}
        sx={{
          width: 266,
          position: "absolute",
          transform: "translateY(-220px)",
        }}
      />
      <Box
        sx={{
          padding: "64px 32px",
          backgroundColor: "#FFF",
          borderRadius: "8px",

          boxSizing: "border-box",

          "& .MuiTextField-root": {
            width: 420,
            mb: 2,
          },

          "& .MuiButton-root": {
            mt: 2,
          },

          "& form": {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <form>
          <TextField label="아이디" />
          <TextField label="패스워드" type="password" />
          <Button variant="contained" size="large" fullWidth>
            로그인
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default AuthComponent;
