"use client"
import React, { useState, createContext } from "react"
import AppBar from "./AppBar"
import Drawer from "./Drawer"
import Content from "./Content"
// import { AuthConsumer } from "../role-access/authContext"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
// const Login = React.lazy(() => import("../views/pages/Login"))

export const DrawerWidth = createContext()
function TheLayout(props,children) {
  const [drawerWidth, setDrawerWidth] = useState(140)
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <DrawerWidth.Provider value={{ drawerWidth, setDrawerWidth }}>
      {/* <AuthConsumer> */}
      {/* {({ authenticated, user, permissions }) =>
          authenticated ? ( */}
      <Box>
        <CssBaseline />
        <AppBar
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
          //  PERMISSIONS={permissions} USER={user}
        />

        <Drawer
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          sx={{
            backgroundColor: "#1231",
          }}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pl: 4,
            pt: 1,
            height:'90vh',
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            marginLeft: { sm: `${drawerWidth}px` },
            background: `linear-gradient(
              to bottom,
              #04133C 0%,
              #04133C 50%,
              #d2d2d2 50%,
              #d2d2d2 100%
            )`, // Set your colors and height
          }}


        >
          <Content  > {props.children}</Content>
        </Box>
      </Box>
      {/* ) : (
            // <Login />

            <Box>
              <CssBaseline />
              <AppBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} PERMISSIONS={permissions} USER={user} />

              <Drawer
                drawerWidth={drawerWidth}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                sx={{
                  backgroundColor: "#101424",
                }}
              />

              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  marginLeft: { sm: `${drawerWidth}px` },
                  backgroundColor: "#e9eff2",
                  height: "100vh",
                }}
              >
                <Content />
              </Box>
            </Box>
          )
        } */}
      {/* </AuthConsumer> */}
    </DrawerWidth.Provider>
  )
}
export default TheLayout
