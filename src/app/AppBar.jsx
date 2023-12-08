'use client'
import React, { useContext } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider" // เพิ่มบรรทัดนี้
import { DrawerWidth } from "./layout"
function Header(props) {
  const { drawerWidth, setDrawerWidth } = useContext(DrawerWidth)
  return drawerWidth > 0 ? (
    <AppBar
      position="relative"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
        backgroundColor: "#1aa4e7",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => {
            props.handleDrawerToggle()
            drawerWidth > 0 ? setDrawerWidth(0) : setDrawerWidth(240)
          }}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          ระบบจัดการคิว
        </Typography>
      </Toolbar>
    </AppBar>
  ) : null
}
export default Header
