import { Fragment, useState } from "react"
import Buttons from "../components/Elements/Buttons"
import CardProduct from "../components/Fragments/CardProduct"


const products = [
    {
        id: 1,
        title: "Tas Hermes",
        price: 999000,
        image: "/images/bag1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente provident tenetur. 
                    Asperiores minus recusandae nam facilis dolorum eos vel enim assumenda architecto reiciendis, aperiam debitis! Distinctio 
                    perferendis deserunt dolorum!`
    },
    {
        id: 2,
        title: "Tas Helios",
        price: 499000,
        image: "/images/bag1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente provident tenetur. 
                    Asperiores minus recusandae nam facilis`
    },
    {
        id: 3,
        title: "Tas Hera",
        price: 299000,
        image: "/images/bag1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente provident tenetur. 
                    Asperiores minus recusandae nam facilis`
    }
]

const email = localStorage.getItem("email")
const ProductPage = ()=>{
    const handleLogout = ()=>{
        window.location.href="/login"
        localStorage.removeItem("email")
        localStorage.removeItem("password")
    }
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1
        }
    ])
    const handleAddToCart = (id)=>{
        if(cart.find(item=>item.id === id)){
            setCart(cart.map(item=>item.id === id? {...item, qty: item.qty + 1}: item))
        } else{
            setCart([...cart, {id, qty: 1}])
        }
    }
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-teal-400 text-white items-center px-10"><div className="mx-5">{email}</div><Buttons variant="bg-purple-300" width="w-max" onClick={handleLogout}>Log Out</Buttons></div>
            <div className="flex justify-center">
                <div className="w-3/4 flex flex-wrap">
                    {products.map((product)=>(
                        <CardProduct key = {product.id}>
                            <CardProduct.Header image={product.image}></CardProduct.Header>
                            <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}></CardProduct.Footer>
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-purple-300 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            {cart.map((item)=>{
                                const product = products.find((product)=>product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>{product.price.toLocaleString("id-ID", {style:"currency",currency:"IDR"})}</td>
                                        <td>{item.qty}</td>
                                        <td>{(product.price * item.qty).toLocaleString("id-ID", {style:"currency",currency:"IDR"})} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductPage