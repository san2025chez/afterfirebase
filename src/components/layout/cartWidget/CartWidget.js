import React, { useContext } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { CartContext } from '../../../context/CartContext'
import './CartWidget.scss'
import { Link } from 'react-router-dom'
//import { Badge } from 'react-bootstrap'

export const CartWidget = () => {

    const { totalCantidad, carrito } = useContext(CartContext)
    return (
        <div className={ `mt-1 ml-3 ${ carrito.length === 0 ? 'hidden widget' : 'widget' }`}>
            <Link to="cart">
                <BsCartFill/> {/* <Badge bg="danger" className="rounded-circle">2</Badge> */}
            </Link>
            <span>{totalCantidad()}</span>
        </div>
    )
}
