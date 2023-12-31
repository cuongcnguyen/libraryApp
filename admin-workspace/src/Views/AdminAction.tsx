import React from 'react'
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import {  CssBaseline, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import UserManagement from './UserManagement/UserManagement';
import BookManagement from './BookManagement/BookManagement';


const drawerWidth=240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });
  
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  
    const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
    })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    }));

    const Drawer = styled(MuiDrawer, {
        shouldForwardProp: (prop) => prop !== "open",
      })(({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        }),
      }));    

const AdminAction = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [menu, setMenu] = React.useState("book");
    const navigate = useNavigate();
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleLogOut = () => {
        localStorage.clear();
        navigate("/");
      };
      const handleDrawerClose = () => {
        setOpen(false);
      };
  return (
    <div className="admin-manage">
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: "none" }),
                    }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                    Admin Workspace
                    </Typography>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleLogOut}
                    edge="start"
                    >
                    <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                <ListItem
                    disablePadding
                    sx={{ display: "block" }}
                    onClick={() => setMenu("user")}
                    >
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}
                        >
                        <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText
                        primary={"User Management"}
                        sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                    </ListItem>
                  
                    <ListItem
                    disablePadding
                    sx={{ display: "block" }}
                    onClick={() => setMenu("book")}
                    >
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}
                        >
                        <LibraryBooksIcon />
                        </ListItemIcon>
                        <ListItemText
                        primary={"Book Management"}
                        sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                    </ListItem>
                    
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />   
                {menu === "user" && <UserManagement />}
                {menu === "book" && <BookManagement />}             
                
            </Box>
        </Box>
    </div>
  )
}

export default AdminAction;
