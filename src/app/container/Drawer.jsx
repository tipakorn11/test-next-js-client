import * as React from "react"
import HomeIcon from "@mui/icons-material/Home"
import CampaignIcon from "@mui/icons-material/Campaign"
import { Box, ListItem, ListItemText, Toolbar, CssBaseline, ListItemIcon, Divider, ListItemButton, List, Drawer, Typography } from "@mui/material"

function SideBar(props) {
  const drawer = (
    <div>
        <ListItemButton sx= {{bgcolor:'white',borderColor:'white', height:'2.66rem'}}>
          <Typography sx={{ fontSize: "0.9rem"}} noWrap component="div">
            Company Name
          </Typography>
        </ListItemButton>
      <List>
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
        backgroundColor: "#1111",
      }}
    >
      <CssBaseline />
      <Drawer
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          // backgroundColor: "#101424",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
            backgroundColor:'#1C399F'
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
            backgroundColor:'#1C399F'

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
