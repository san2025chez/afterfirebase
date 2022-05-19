import React, {useState, useContext} from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
 
export const ItemDetail = (props) => {

    const { id, name, img, stock, price, category } = props

    const context = useContext(CartContext)
/*     console.log(context) */
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0) //Cantidad en el carrito
    // [🔹cantidad:variable iterable, 🔸setCantidad: funcion que modifica ese estado
    //Esa función es usada en ItemCount por medio de context

    //const [agregado, setAgregado] = useState(false) //Si ya está agregado en el carrito

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1) // Historial una página atrás en el historial
    }

    const handleToIndex = () => {
        navigate('/') // Historial ruta específica
    }

    const handleAddToCart = () => {
        if (cantidad > 0) {

            agregarAlCarrito({
                id, name, price, img, cantidad
            })
            //setAgregado(true) //Esto controla el cambio de estado para el botón de terminar compar
        }
    }

    return (
        <>
            <Row>
                <Col className="mt-4">
                    <Button className="btn btn-primary me-2" onClick={handleBack}>Volver</Button>
                    <Button className="btn btn-info text-white" onClick={handleToIndex}>Ir al inicio</Button>
                </Col>
            </Row>
            <Card className="mt-3">
                <Card.Header as="h5" className="text-muted">{name}</Card.Header>
                <Card.Body>
                    <Row>
                    <Col xs={6}>
                        <Image src={img} height="300" rounded />
                    </Col>
                    <Col>
                        <Card.Title className="text-info">Precio: {price}</Card.Title>
                        <div className="d-flex mb-0">
                            <Card.Text className="me-2 mb-0">
                                Disponibles: {stock}
                            </Card.Text>
                            <Card.Text className="text-muted">
                            <small> {category} </small>
                            </Card.Text>
                        </div>
                        <Row className="mt-4">
                        <Col xs={6}>

                            {
                                !isInCart(id) //Devuelve true o false segun, si el producto se encuentra en el carrito
                                    ? <ItemCount  //Mejor llamar un componente externo que intertar todo el código de este (mover lógica completa a componentes de menor orden)
                                    max={stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}  /* 🔹Consumiendo el max desde itemCount. Los valores de cantidad también */
                                    onAdd={handleAddToCart} /* 🟢 Se envía a ItemCount */
                                    />
                                : <Link to="/cart" variant="primary" className="btn btn-success">Terminar compra</Link>
                            }
                                
                        </Col> 
                        </Row>
                    </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
            </Card>
        </>
    )
}
