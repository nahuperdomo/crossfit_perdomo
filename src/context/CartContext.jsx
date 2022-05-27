import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) =>{
        //Estados y funciones globales
        const [cartList, setcartList] = useState([])



        return(
        <CartContext.Provider value={ { cartList} }>

            {children}
            
        </CartContext.Provider>
    );
}

export default CartContextProvider;