import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './components/layout/navBar/NavBar' //🔸Importando por default
// import { NavBar } from './components/layout/navBar/NavBar' // Importando SIN default
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './context/CartContext';


function App() {

  return (

      <CartProvider> {/* 🔸Esto viene de la exportación del CartContext */}

        <BrowserRouter> {/* Este engloba a toda la App */}

          <NavBar2/> {/* Los componentes comunes van por fuera del <Routes></Routes> */}
          <AppRouter/>

        </BrowserRouter>

      </CartProvider>
  );
}

export default App;


// == HILO SUPERIOR ==
// App.js             = Base del proyecto
//  ItemListContainer = presentacion (Contiene el catalogo de productos)
//    ItemList        = mapea el stock (que viene de una api)
//      item          = Recibe todos los props desde el ItemList

// == HILO INFERIOR ==
// ItemDetailContainer
//  ItemDetail
//    ItemCount