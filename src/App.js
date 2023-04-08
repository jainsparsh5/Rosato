import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false); // This state is passed to Header.js

  const showCartHandler = () => { // This function is passed to Header.js
    setCartIsShown(true);
  };

  const hideCartHandler = () => { // This function is passed to Cart.js
    setCartIsShown(false);
  };

  return (  
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>} 
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
