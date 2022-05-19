import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import { Image } from 'react-bootstrap'

export const CartItem = ({name, price, cantidad, id, img}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <div className="row mb-5">
            <div className="col-3">
             <Image src={img} height="150" rounded />
            </div>
            <div className="col-6">
                <h4 className="text-info">{name}</h4>
                <h5 className="mb-2">Precio: {price}</h5>
                <h6 className="text-muted">Cantidad: {cantidad}</h6>
                <button 
                    className="btn btn-danger"
                    onClick={() => { removerDelCarrito(id) }}
                >
                    <BsFillTrashFill/>
                </button>
            </div>

        </div>
    )
}