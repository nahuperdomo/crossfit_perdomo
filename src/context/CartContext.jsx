import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    //Estados y funciones globales
    const [cartItems, setcartItem] = useState(() => {
        try {
            const productosEnLocalStorage = localStorage.getItem("cartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }, [cartItems]);

    const addItemToCart = (product) => {
        const productoExistente = cartItems.find(item => item.id === product.id);
        if (productoExistente) {
            setcartItem(
                cartItems.map((productoExistente) => {
                    if (productoExistente.id === product.id) {
                        return { ...productoExistente, cantidad: productoExistente.cantidad + product.cantidad , precio: product.precio }
                    } else return productoExistente;
                })
            );
        } else {
            setcartItem([...cartItems, { ...product }]);
        }
    }

     const deleteItemFromCart = (product) => {
        const productoExistente = cartItems.find(item => item.id === product.id);
        if (productoExistente.cantidad === 1) {
            setcartItem(productoExistente => productoExistente.id !== product.id);
        }
        else {
            setcartItem((productoExistente) => {
                if (productoExistente.id === product.id) {
                    return { ...productoExistente, cantidad: productoExistente.cantidad - 1 };
                } else return productoExistente;
            });
        }
    };

   /*  const vaciarCarrito = () => {
        setcartItem([]);
    }
 */


    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, deleteItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};