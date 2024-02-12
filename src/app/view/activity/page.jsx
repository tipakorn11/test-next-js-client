'use client'
import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Row, Col } from '@/app/components/customComponent';
import { colors } from '@mui/material';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './product';
import { Button } from 'primereact/button';

const Page = () => {


    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    const header = (name) => {
        return (
            <div className="Row" >
                <div className="text-center text-white">
                    <p style={{ frontSize: "10px" }}>{name}</p>
                </div>
            </div>
        );
    }
    const New_header = (name) => {
        return (
            <div className="Row" >
                <div className="text-black">
                    <p style={{ frontSize: "40px" }}>{name}</p>
                </div>
            </div>
        );
    }
    const buttonHeader = () => {
        return (
            <div className='flex justify-content-between'>
                <p className='m-0'>
                    Stock
                </p>
                <Button label="Buy" className='h-2rem' style={{background: "#00ff10"}} icon="pi pi-check" loading={loading} onClick={load} />

            </div>
        );
    }
    return (
        <>
            <p className='m-0 text-white'>
                Activity
            </p>
            <Row>
                <Col md={3}>
                    <Card style={{
                        background: `linear-gradient(
               36deg,
              #c129d1 62%,
              #00d4ff 84%
            )`,
                    }} header={header("Banana")}>
                        <p className='text-2xl text-center text-white'>
                            30%
                        </p>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{
                        background: `linear-gradient(
               36deg,
              #c129d1 62%,
              #00d4ff 84%
            )`,
                    }} header={header("Avocado")}>
                        <p className='text-2xl text-center text-white'>
                            15%
                        </p>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{
                        background: `linear-gradient(
               36deg,
              #c129d1 62%,
              #00d4ff 84%
            )`,
                    }} header={header("Apple")}>
                        <p className='text-2xl text-center text-white'>
                            35%
                        </p>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{
                        background: `linear-gradient(
               36deg,
              #c129d1 62%,
              #00d4ff 84%
            )`,
                    }} header={header("Pine Apple")}>
                        <p className='text-2xl text-center text-white'>
                            20%
                        </p>
                    </Card>
                </Col>
            </Row>

            <div className="card">
                <DataTable header={buttonHeader} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} value={products} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                    <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                    <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
                </DataTable>
            </div>
        </>
    );
}

export default Page;