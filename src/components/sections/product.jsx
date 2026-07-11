import { useCart } from "../cartPorvider"

export default function Products(){ 
    const {addToCart} = useCart();

    let products = [
        {
            id: 1,
            url: "https://static-01.daraz.pk/p/8caa65d41ec08be267aff45b6c07a3e9.jpg",
            urlDescription: "Shoes",
            name: "Shoes",
            price: 30,
        },
        {
            id: 2,
            url: "https://tse1.mm.bing.net/th/id/OIP.xJcgA4aV_FKuriojf5p7JwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            urlDescription: "Shoes",
            name: "Sport Shoes",
            price: 120,
        },
        {
            id: 3,
            url: "https://tse1.mm.bing.net/th/id/OIP.My52WvkOIRgqHyOImTF4TAHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            urlDescription: "Shoes",
            name: "Adidas Shoes",
            price: 120,
        },
        {
            id: 4,
            url: "https://tse4.mm.bing.net/th/id/OIP.OYUkAfYcb3hfPtJ6iJ05jgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            urlDescription: "Shoes",
            name: "Nike Shoes",
            price: 100,
        },
        {
            id: 5,
            url: "https://tse1.mm.bing.net/th/id/OIP.EWIM5I8BdhYQdnHOwn06oQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            urlDescription: "Shoes",
            name: "big Shoes",
            price: 200,
        },
        {
            id: 6,
            url: "https://tse4.mm.bing.net/th/id/OIP.cnrROWbmOuYGIV5qqRbGeQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            urlDescription: "Shoes",
            name: "small Shoes",
            price: 50,
        },
        {
            id: 7,
            url: "https://tse2.mm.bing.net/th/id/OIP.T48qqzjng0UJW6f8qZKbMAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            urlDescription: "Shoes",
            name: "Tank Shoes",
            price: 300,
        },
        {
            id: 8,
            url: "https://tse4.mm.bing.net/th/id/OIP.ErQUEu6rBVcT4Z-ULpJoCAHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            urlDescription: "Shoes",
            name: "Samaba Shoes",
            price: 80,
        },
        {
            id: 8,
            url: "https://i.pinimg.com/736x/bf/47/84/bf4784c3092bb7e083c9cf565dba6596.jpg",
            urlDescription: "Shoes",
            name: "Samaba Shoes",
            price: 80,
        },
        {
            id: 9,
            url: "https://th.bing.com/th/id/OIP.FToa6DDeO2UtyhnN46Jo2QHaFF?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
            urlDescription: "Shoes",
            name: "Kids Shoes",
            price: 20,
        },
        {
            id: 10,
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1736350205-p00885186-677e99f6b351f.png?crop=1xw:1xh;center,top&resize=980:*",
            urlDescription: "Shoes",
            name: "Boots",
            price: 90,
        },
        {
            id: 11,
            url: "https://tse1.mm.bing.net/th/id/OIP.9X66kvYPz7gPVJFuOzmKKQHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            urlDescription: "Shoes",
            name: "Big Boots",
            price: 130,
        },
        {
            id: 12,
            url: "https://m.media-amazon.com/images/I/715Fmkhd11L._AC_SL1500_.jpg",
            urlDescription: "Shoes",
            name: "Safety Boots",
            price: 100,
        },
    ]

    let HandleAdd = (product) => {
        addToCart(product)
        alert("Added to cart Successfully!")
    }
    
    return(
        <>
            <section id="Products">
                <h4 className="Phead text-center">PRODUCTS</h4>
                <div className="container d-flex flex-row justify-content-center flex-wrap">
                    {products.map((product) => (
                        <div className="card" key={product.id}>
                            <img src={product.url} alt={product.urlDescription} height="300" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {product.name}  
                                </h5>
                                <p>
                                    {product.price}$
                                </p>
                                <button className="btn-card" onClick={() => HandleAdd(product)}>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}