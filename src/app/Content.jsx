"use client"
import React, { Suspense } from "react"
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = (props) => {
  const { PERMISSIONS, USER } = props
  const _generatePermission = (data) =>
    PERMISSIONS.find((item) => item.menu_name == data.key) || {
      permission_view: false,
      permission_add: false,
      permission_edit: false,
      permission_approve: false,
      permission_cancel: false,
      permission_delete: false,
    }
  return (
    <></>
    // <Suspense fallback={loading}>
    //     {routes.map((route, idx) => {
    //       let PERMISSION = _generatePermission({ key: route.key })
    //       if (!PERMISSION.permission_view && false) {
    //         // Redirect to the unauthorized page
    //         return (
    //           <Route
    //             key={idx}
    //             path={route.path}
    //             exact={route.exact}
    //             name={route.name}
    //             render={() => {
    //               return null 
    //             }}
    //           />
    //         )
    //       }
    //       return (
    //         route.component && (
    //           <Route
    //             key={idx}
    //             path={route.path}
    //             exact={route.exact}
    //             name={route.name}
    //             render={(props) => (
    //               <route.component {...props} SESSION={{ USER, PERMISSION }} />
    //             )}
    //           />
    //         )
    //       )
    //     })}
    //     <Route component={Page401} />
    // </Suspense>
  )
}

export default TheContent
