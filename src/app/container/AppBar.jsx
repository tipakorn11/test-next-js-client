"use client"
import React, { useContext } from "react"
import { Avatar, AppBar } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { DrawerWidth } from "./layout"
import { Button } from "primereact"
function Header(props) {
  const { drawerWidth, setDrawerWidth } = useContext(DrawerWidth)
  return (
    <AppBar
      position="relative"
      sx={{
        height: "2.66rem",
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
        backgroundColor: "#ffffff",
      }}
    >
      <div className="flex flex-wrap h-full align-items-center ml-2 justify-content-between">
        <IconButton
          color="default"
          aria-label="open drawer"
          edge="start"
          onClick={() => {
            props.handleDrawerToggle()
          }}
          sx={{ ml: 2, mr: 2, display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <label className="ml-2 hidden sm:block text-color">Typography check</label>
        <Button
          label="Search"
          icon="pi pi-search"
          className="hidden sm:block text-color m-auto h-2rem w-3 border-round-2xl p-0 border-400"
          pt={{ root: { className: "bg-white" }, label: { className: "text-left" } }}
          onClick={() => console.log("idiot")}
        />

        <Button
          className="block sm:hidden h-2rem p-0"
          icon="pi pi-search"
          outlined
          severity="secondary"
          aria-label="Search"
          onClick={() => console.log("idiot")}
        />
        <div className="flex">
          <div className="flex flex-column mr-2  p-1">
            <label className="text-xs text-right text-color">nukkanik</label>
            <label className="text-xs text-color">Super Admin</label>
          </div>
          {/* <Avatar src="/image/avatar.png" alt="My Avatar" /> */}
        </div>
      </div>
    </AppBar>
  )
}
export default Header
