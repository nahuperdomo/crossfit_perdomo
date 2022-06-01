import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) =>{
        //Estados y funciones globales
        const [cartList, setcartList] = useState([])

        function addToCart(item){
            setcartList(item)
        }


        return(
        <CartContext.Provider value={ { cartList, addToCart } }>

            {children}
            
        </CartContext.Provider>
    );
}

export default CartContextProvider;