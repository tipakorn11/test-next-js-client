'use client'
import React from 'react'
import { Card } from 'primereact'
import { ProductService } from './product'
import { DataTable } from 'primereact/datatable'

export default function page() {

    useEffect(() => {
        const fetchData = async() => {
            const product = await ProductService.getProductsSmall()
            console.log(product);
            setState({ ...staticGenerationAsyncStorage, loading: false})
        }
    })
  return (
    <div>
      <table>
        
      </table>

    </div>
  )
}
