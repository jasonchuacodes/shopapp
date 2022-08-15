import React from 'react';
import Routes from './routes';
import { CartProvider } from './CartContext';


function App() {
  return (
    <div className="container h-screen p-6">
      <CartProvider>
        <Routes />
      </CartProvider>
    </div>
  );
}

export default App;
