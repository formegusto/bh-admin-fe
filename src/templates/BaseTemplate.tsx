import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
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

function BaseTemplate({ children }: React.PropsWithChildren<any>) {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = React.useCallback((open: boolean) => {
    setOpen(open);
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
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>사용자 관리</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>신청서 관리</ListItemText>
          </ListItemButton>
        </List>
      </LeftDrawer>

      {children}
    </Box>
  );
}

export default BaseTemplate;
