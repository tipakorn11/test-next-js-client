"use client"
import React, { Component } from "react"
import Link from "next/link"
class page extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        สุวรรณ หีใหญ่
        <Link
          href={{
            pathname: "/dashboard/insert",
            query: { name: "test" },
          }}
        >
          <button>asdasd</button>
        </Link>
      </div>
    )
  }
}

export default page
