import React from 'react'
import { Navigate, useRoutes } from 'react-router';
import { ItemListContainer } from '../components/ListContainer/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from '../components/CartItem/CartView';

export const AppRouter = () => {

    const routes = useRoutes([
        { path: "/", element: <ItemListContainer/>},
        { path: "/productos/:catId", element: <ItemListContainer/> },
        { path: "/detail/:itemId", element: <ItemDetailContainer/>},
        { path: "/cart", element: <CartView/>},
        { path: "*", element: <Navigate to="/" />},
    ])

    return routes
}
