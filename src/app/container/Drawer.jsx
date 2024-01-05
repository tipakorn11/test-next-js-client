import * as React from "react"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import Divider from "@mui/material/Divider"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Box from "@mui/material/Box"
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';

function SideBar(props) {
  const drawer = (
    <div
      sx={{
        backgroundColor: "#101424",
      }}
    >
      <Toolbar >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>Queue managenent</ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </Toolbar>

      <List>
        <Divider />
        <ListItem disablePadding>
          {/* <ListItemButton
            component={Link}
            to="/"
            sx={{
              backgroundColor:
                useLocation().pathname === "/" ? "#46a3f7" : "transparent",
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemIcon>หน้าหลัก</ListItemIcon>
            <ListItemText />
          </ListItemButton> */}
        </ListItem>
        <ListItem disablePadding>
          {/* <ListItemButton
            component={Link}
            to="/manage-queue"
            sx={{
              backgroundColor:
                useLocation().pathname === "/manage-queue"
                  ? "#46a3f7"
                  : "transparent",
            }}
          >
            <ListItemIcon>
              <CampaignIcon />
            </ListItemIcon>
            <ListItemIcon>เรียกคิว</ListItemIcon>
            <ListItemText />
          </ListItemButton> */}
        </ListItem>
      </List>
    </div>
  )

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: props.drawerWidth },
        flexShrink: { sm: 0 },
        backgroundColor: "#101424",
      }}
    >
      <CssBaseline />
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          backgroundColor: "#101424",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          backgroundColor: "red",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default SideBar
