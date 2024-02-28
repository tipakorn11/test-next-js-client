'use client'
import React, { useState, useEffect } from 'react'
import { Card } from 'primereact'
import { ProductService } from './product'
import { DataTable } from 'primereact/datatable'
import { Category } from '@mui/icons-material'



export default function page() {

  //ไม่ว่าจะ const ใดๆ อย่าลืมตั้งชื่อ, กำหนดค่า, และ const useState ด้วย ไม่งั้นจะเรียกใช้ค่าไม่ได้และมีบัค
  const [state, setState] = useState({

    loading: true,
    product: []
  })
  const [inventoryStatus, setInventorystatus] = useState('LOWSTOCK');
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');
  console.log(search)



  useEffect(() => {
    const fetchData = async () => {
      const isLowstock = inventoryStatus.filter === 'LOWSTOCK'
      console.log(inventoryStatus)
      const product = await ProductService.getProductsSmall()
      console.log(product);
      setState({ ...state, loading: false })
      setState({ product })
    }

    fetchData()

  },
    [])
  const handleSearch = (data) => {
    const fetchData = async (searchTerm) => {
      const product = await ProductService.getProductsSmall(searchTerm);
      const filteredProduct = product.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setState({ product: filteredProduct, loading: false });
      fetchData(search);
    };
    console.log(data)
  };

  return (
    <Card>
      <div>
        <input type="text"
          placeholder='search...'
          onChange={(e) => handleSearch(e.target.value)} />
        <table>
          <thead>
            <tr>
            </tr>
            <tr>
              <th className='border-1'>Name</th>
              <th className='border-1'>Price</th>
              <th className='border-1'>Inventory Status</th>
            </tr>
          </thead>
          <tbody>
            {state.product?.map((item, idx) => (
              <tr key={item.code}>
                <td className='border-1'>{item.name}</td>
                <td className='border-1'>{item.price}</td>
                <td className='border-1'>{item.inventoryStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

