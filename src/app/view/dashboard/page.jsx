'use client'
import React, { useState, useEffect } from 'react'
import { Card } from 'primereact'
import { ProductService } from './product'
import { DataTable } from 'primereact/datatable'
import { Category } from '@mui/icons-material'



export default function page() {


  const [state, setState] = useState({

    loading: true,
    product: []
  });

  useEffect(() => {
    const fetchData = async () => {
      // const filterProduct = inventoryStatus.filter === 'INSTOCK'
      // console.log(filterProduct)
      const product = await ProductService.getProductsSmall()
      console.log(product);
      setState({ ...state, loading: false })
      setState({ product })
    }
    fetchData()
    // const [products, setProducts] = useState([{}]);
  }, [])
  return (
    <Card>
      <div>
        <table>
          <thead>
            <tr>
              <th className='border-1'>Name</th>
              <th className='border-1'>Cetegory</th>
            </tr>
          </thead>
          <tbody>
            {state.product?.map((item, idx) => (
              <tr key={item.code}>
                <td className='border-1'>{item.name}</td>
                <td className='border-1'>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

