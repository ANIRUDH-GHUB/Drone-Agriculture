import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TokenIcon from "@mui/icons-material/Token";
import KeyIcon from "@mui/icons-material/Key";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PercentIcon from "@mui/icons-material/Percent";
import StorageIcon from "@mui/icons-material/Storage";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AppBar, { DrawerHeader, Drawer } from "./utils";
import "./FarmerDashboard.scss";
import DroneOrders from "./DroneOrders/DroneOrders";
import BookDrone from "./BookDrone/BookDrone";

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(2);
  const drawerOptions = [
    { label: "Maintenance", icon: <KeyIcon />, component: <DroneOrders /> },
    {
      label: "Book Drone Service",
      icon: <ViewInArIcon />,
      component: <BookDrone />,
    },
    { label: "My Bookings", icon: <PercentIcon />, component: <DroneOrders /> },
    {
      label: "Service Reports",
      icon: <StorageIcon />,
      component: <DroneOrders />,
    },
    {
      label: "Profile",
      icon: <PersonOutlineIcon />,
      component: <DroneOrders />,
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeActiveTab = (ind: number) => {
    setActiveTab(ind);
  };

  const renderActiveTab = () => drawerOptions[activeTab].component;

  return (
    <Box sx={{ display: "flex" }} id="famer-home">
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
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
            Mini variant drawer
          </Typography>
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

        <List sx={{ width: "260px", margin: "-10px" }}>
          <ListItem sx={{ display: "block", padding: "20px 10px" }}>
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
                <TokenIcon />
              </ListItemIcon>
              <Typography
                variant="h5"
                sx={{ fontWeight: "600", fontFamily: "Poppins" }}
              >
                Dashboard
              </Typography>
            </ListItemButton>
          </ListItem>
          {drawerOptions.map((item, index) => (
            <ListItem
              key={item.label}
              disablePadding
              sx={{ display: "block", padding: "20px 10px" }}
              className={activeTab === index ? "active" : ""}
              onClick={() => changeActiveTab(index)}
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
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        {renderActiveTab()}
      </Box>
    </Box>
  );
}
