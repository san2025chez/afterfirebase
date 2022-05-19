import React from 'react' //Siempre importar el hook de useState
import { Button } from 'react-bootstrap'

function ItemCount({ max, setCantidad, cantidad, onAdd }) { //🔸 Este max={stock} es una prop de itemDetail
                                            //🟢 onAdd viene del ItemDetail

    //El estado está en el componente padre, pero los handlers estan en el componente hijo
    const handleAddItem = () => {
        max > cantidad
            ? setCantidad(cantidad + 1) //A cada onClick suma uno
            //🔸setCounter 🔹counter
            : alert('No hay más unidades disponibles')
    }
    
    const handleRemoveItem = () => {
        cantidad > 1
           ? setCantidad(cantidad - 1)
           : alert('No se puede disminuir más')
    }

    //Función de agregar al carrito, se pasa a ItemDetail
    /* const response = () => {
        alert(`Agregaste ${counter} productos` )
    } */

    //Puedo enviar los atributos al elemento boton así 🔹
    const handleAddConfig = {
        className: `btn-block ${cantidad === max ? 'btn-danger' : 'btn-primary'}`, //las clases en comun se ponen en un template string
        onClick: handleAddItem, //Acción del boton
        disabled: cantidad === max //Disabled si...
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Button
                 onClick={handleRemoveItem}
                 className={ `btn-block ${cantidad === 0 ? 'btn-secondary' : 'btn-info'}` } //👈🏻 Optionanl styling, acompaña al control handleAddItem del ItemCount
                 disabled={cantidad === 0}
                 >
                     -
                </Button> {/* Handler para sumar */}
                <h3>{cantidad}</h3>       
                <Button  {...handleAddConfig}>  {/* 🔹Recibiendo el objeto handleAddConfig */}
                     +
                 </Button>
            </div>

            <div>
                <Button variant="primary" className="w-100 mt-3 text-white" onClick={onAdd}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
        
    )
}

export default ItemCount

