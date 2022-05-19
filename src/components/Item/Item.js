import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import ItemCount from '../ItemCount/ItemCount'

//Aca renderizo la tarjeta del producto
const ProductCard = ( props ) => {

    const {id, name, img, stock, price, category } = props // 🔹Este es el stock de la tarjeta

    return (
        <Card className="m-2">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Subtitle className="text-muted">{name}</Card.Subtitle>
                <Card.Title className="text-info" >Precio: {price}</Card.Title>
                <div className="d-flex mb-0">
                    <Card.Text className="me-2 mb-0">
                        Disponibles: {stock}
                    </Card.Text>
                    <Card.Text className="text-muted">
                       <small> {category} </small>
                    </Card.Text>
                </div>
            </Card.Body>
            <Card.Footer>
               {/*  <ItemCount stock="5"/> */} {/*🔸 Este stock es el que valida en el ItemCount.js */}
               <Link to={`/detail/${id}`} className="btn btn-primary"> Ver más</Link>
            </Card.Footer>
        </Card>
    )
}

export default ProductCard
