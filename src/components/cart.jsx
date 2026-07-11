import { Link } from "react-router-dom";
import { useCart } from "./cartPorvider";
import { useState } from "react";

export default function Cart(){
    const {cart , removeFromCart, cartTotal } = useCart()
    const[Empty , setEmpty] = useState()

    let makeEmpty = () => {
        alert("Your order send successfully !")
        window.location.href = '/'
    }
    if(cart.length === 0){
        return(
            <p className="Look text-center">
                Cart is Empty <Link to="/">back to product section</Link>
            </p>
        )
    }

    return(
        <>
        <section className="cart">
            <h1 className="text-center text-uppercase">Cart</h1>
            <div className="container d-flex flex-row justify-content-center flex-wrap">
                {cart.map((item) => (
                <div className="card" key={item.id}>
                    <img src={item.url} alt={item.urlDescription} height="300" />
                    <br />
                    <h3 className="text-center">{item.name}</h3>
                    <p className="text-center">
                        {item.price} X {item.quantity}
                    </p>
                    <button className="btn-cart" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            </div>
            <br />
            <h2 className="text-center">Total: {cartTotal} $</h2>
            <div className="container d-flex flex-row justify-content-center">
                <button className="btn-card" onClick={makeEmpty}>Send Order</button>
            </div>
        </section>
        <br />
        </>
    )
}