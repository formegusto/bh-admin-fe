import {
  Alert,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Snackbar,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "../components/common/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import LeftDrawer from "../components/common/LeftDrawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import Profile, { ProfileImage } from "../components/common/Profile";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import UpdateDrawer from "../components/common/UpdateDrawer";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PAGENAMES from "../pages/PageNames";
import SensorsIcon from "@mui/icons-material/Sensors";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function BaseTemplate() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [open, setOpen] = React.useState<boolean>(false);
  const [updateOpen, setUpdateOpen] = React.useState<boolean>(false);
  const [newUpdate, setNewUpdate] = React.useState<boolean>(true);

  const handleOpen = React.useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  const handleUpdateOpen = React.useCallback((open: boolean) => {
    setUpdateOpen(open);
  }, []);

  const handleNewUpdate = React.useCallback((newUpdate: boolean) => {
    setNewUpdate(newUpdate);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleOpen(true)}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon
              sx={{
                fontSize: "32px",
              }}
            />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            BEMS-HDMS Admin Page
          </Typography>
          <IconButton
            onClick={() => handleUpdateOpen(true)}
            sx={{
              position: "absolute",
              right: "24px",
              "& .MuiBadge-badge": {
                width: "14px",
                height: "20px",
                background: "#ff4d4f",
                borderRadius: "100%",
                color: "#fff",
                fontSize: "8px",
              },
            }}
          >
            <Badge badgeContent={4}>
              <EditNotificationsIcon
                fontSize="medium"
                sx={{
                  color: "#FFF",
                }}
              />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <LeftDrawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            justifyContent: "flex-end",
            padding: "0px 16px",
            color: "#fff",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => handleOpen(false)}
          >
            <ChevronLeftIcon
              sx={{
                fontSize: "32px",
              }}
            />
          </IconButton>
        </Toolbar>
        <Profile open={open}>
          <ProfileImage>F</ProfileImage>
          <Typography variant="subtitle1" component="div">
            관리자 formegusto
          </Typography>
        </Profile>

        <Divider />
        <List
          sx={{
            width: "100%",
            "& *": {
              color: "#fff !important",
            },
            "& .MuiListItemButton-root": {
              padding: "0",
            },

            "& .MuiListItemIcon-root": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "64px",
              height: "64px",
            },
          }}
          component="div"
          subheader={
            open && (
              <ListSubheader
                component="div"
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                }}
              >
                MANAGEMENT MENU
              </ListSubheader>
            )
          }
        >
          <ListItemButton onClick={() => navigate("/user-mgmt")}>
            <ListItemIcon>
              <PersonIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>사용자 관리</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/app-mgmt")}>
            <ListItemIcon>
              <ArticleIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>신청서 관리</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/data-mgmt")}>
            <ListItemIcon>
              <SensorsIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>데이터 관리</ListItemText>
          </ListItemButton>
        </List>
      </LeftDrawer>

      <UpdateDrawer
        anchor="right"
        className="update-drawer"
        open={updateOpen}
        onClose={() => handleUpdateOpen(false)}
      ></UpdateDrawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography
          variant="h5"
          sx={{
            mb: 2,
          }}
        >
          {PAGENAMES[pathname]}
        </Typography>
        <Outlet />
      </Box>

      <Snackbar
        open={newUpdate}
        onClose={() => handleNewUpdate(false)}
        autoHideDuration={4000}
        message="Note archived"
        sx={{
          transform: "translateY(64px)",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert severity="info" onClose={() => handleNewUpdate(false)}>
          새로운 업데이트 내용이 생겼어요.
          <br />
          확인 후 저장 버튼을 눌러주세요.
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default BaseTemplate;
