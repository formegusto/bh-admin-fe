import { styled } from "@mui/material";
import { blue } from "@mui/material/colors";
import MuiDrawer from "@mui/material/Drawer";
import { UPDATE_DRAWER_WIDTH } from "../../styles/StyleDatas";

const UpdateDrawer = styled(MuiDrawer, {
  shouldForwardProp: () => true,
})(({ theme }) => ({
  width: UPDATE_DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: theme.zIndex.appBar + 400,

  "& .MuiPaper-root": {
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: "16px",
    width: UPDATE_DRAWER_WIDTH,
    backgroundColor: blue[50],
  },
}));

export default UpdateDrawer;
