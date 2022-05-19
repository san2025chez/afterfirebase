/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { getData } from '../../helpers/getData'
import ItemList from '../ItemList/ItemList'
import { Spinner } from 'react-bootstrap'
import {collection,getDocs,query,where} from 'firebase/firestore'
import {db} from '../firebase/config'



export const ItemListContainer = (props) => {


    const {greeting, content} = props //🔸 Desestructurando

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const { catId } = useParams()
  



    useEffect(() => {

        setLoading(true)

       /*      getData()
            .then( (resp) => {

                if (!catId){ //Condicionando la respuesta con el catId (filtrar)
                    setProducts(resp)
                } else {
                    setProducts(resp.filter(prod => prod.category === catId)) //Filtro
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            }) */

            //1-Hacer una referencia a la coleccion
            const micoleccion= collection(db,"productos")

            const q= catId ? query(micoleccion,where('category','==',catId)) : micoleccion
             getDocs(q)
             .then((datos)=>{
                 setProducts(datos.docs.map((doc)=>({id:doc.id,...doc.data()})));

             }).finally(()=>{
                 setLoading(false)
             })


    }, [catId]) 
    return (
        
        <Container>
            <Row>
                <h3 className="mt-3 text-center">{greeting}</h3> {/* 🔸 Recibiendo el props.greeting desestructurado */}
                <p className="text-center">{content}</p>
            </Row>
            <Row>
            {
                loading 
                    ? <div className="d-flex justify-content-center mt-5">
                        <Spinner animation="border" role="status" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      </div>
                    : <ItemList items={products}/>
            }
            </Row>
        </Container>
    )
}