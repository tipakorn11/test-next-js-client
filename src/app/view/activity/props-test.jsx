'use client'
import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


const PropsTest = (props) => {

    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        // ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    const [visible, setVisible] = useState(false);

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return (


        // <Button label={props.name}>
        // </Button>
        
        <div>
                <Dialog header="Header" visible={props.visible} style={{ width: '50vw' }} onHide={() => props.onHide()}>
                    <p className="m-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, qui? Corporis consequuntur tenetur doloremque nostrum hic fugit ipsa? Aut nisi recusandae, inventore maiores cupiditate vel eum odit repellat molestias a libero, perspiciatis consequuntur similique, temporibus distinctio deserunt repellendus. Cumque, tempore enim eligendi necessitatibus sit non odit tempora facere nisi consequuntur repellat fuga? Repellat impedit odio, magnam aut error natus eius voluptates. Perferendis rem animi id soluta, praesentium blanditiis cum eius nulla quas commodi quidem aut ea! Qui, cupiditate iusto! Reprehenderit, ullam quam aperiam enim et iure hic, blanditiis ex, dolore quod vitae totam suscipit eligendi quibusdam praesentium sed mollitia nemo?
                    </p>
                </Dialog>


        </div>
    );
}

export default PropsTest;
