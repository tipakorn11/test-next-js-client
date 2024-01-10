"use client"
import React, { useEffect, useState } from "react"
import { Card } from "@mui/material"
import { Row, Col } from "../components/customComponent"
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
  const Cardcomponent = (label,value,graph) => {
    return (
      <Col md={2}>
        <Card
          className="w-full h-auto align-items-center flex flex-column p-4"
          style={{
            background: `linear-gradient(
              to bottom,
              #01327B 0%,
              #010B35 100%
            )`,
          }}
        >
          <label className="text-50 pb-4"> {label}</label>
          <label className="text-50 pb-4"> {value}</label>
          <label className="text-50 "> {graph}</label>

        </Card>
      </Col>
    )
  }
  return (
    <div>
      <label className="text-50">Activity</label>
      <Row>
        {Cardcomponent('Need service',39,'-----')}
        {Cardcomponent('Service type PM',20,'-----')}
        {Cardcomponent('Service Type Point',19,'-----')}
        {Cardcomponent('Customer',6,'-----')}
        {Cardcomponent('Next month',24,'-----')}
        {Cardcomponent('Backlog',30,'-----')}
      </Row>
    </div>
  )
}

export default Page
