"use client"
import React, { useEffect, useState } from "react"
import { Card } from "@mui/material"
const Page = () => {
  const [state, setState] = useState({
    loading: true,
  })

  useEffect(() => {
    // const connection = createConnection(serverUrl, roomId);
    // connection.connect();
    fetchData()
    return () => {
      //   connection.disconnect();
    }
  }, [])
  const fetchData = () => {
      setState({ ...state, loading: true }, async () => {
        //statement
        setState({ ...state, loading: false })
      })
  }
  return (
    <div>
      <img src='/next.svg' alt="" />
      ฟหกฟาห่สาก่ฟสาห่
    </div>
  )
}

export default Page
