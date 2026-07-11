import { createContext , useContext , useEffect , useState } from "react"

const Cartcontext = createContext()

export function CartProvider({children}){
    const[cart , setCart] = useState(() => {
        const saved = localStorage.getItem("cart")
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
    localStorage.setItem("cart" , JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if(existing){
                return prev.map((item) => (
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                ))
            }
            return [...prev , {...product , quantity: 1}];
        })
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }

    const cartCount = cart.reduce((sum , item) => sum + (item.quantity || 0), 0);
    const cartTotal = cart.reduce(
        (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 0), 0
    );

    return(
        <>
            <Cartcontext.Provider value={{cart , addToCart , removeFromCart , cartCount , cartTotal}}>
                {children}
            </Cartcontext.Provider>
        </>
    )
}

export const useCart = () => useContext(Cartcontext)