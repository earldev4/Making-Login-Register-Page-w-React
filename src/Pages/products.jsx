import { Fragment } from "react"
import Buttons from "../components/Elements/Buttons"
import CardProduct from "../components/Fragments/CardProduct"
import Counter from "../components/Fragments/Counter"

const products = [
    {
        id: 1,
        title: "Tas Hermes",
        price: "Rp 999.000",
        image: "/images/bag1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente provident tenetur. 
                    Asperiores minus recusandae nam facilis dolorum eos vel enim assumenda architecto reiciendis, aperiam debitis! Distinctio 
                    perferendis deserunt dolorum!`
    },
    {
        id: 2,
        title: "Tas Helios",
        price: "Rp 499.000",
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
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-teal-400 text-white items-center px-10"><div className="mx-5">{email}</div><Buttons variant="bg-purple-300" width="w-max" onClick={handleLogout}>Log Out</Buttons></div>
            <div className="flex justify-center">
                {products.map((product)=>(
                    <CardProduct key = {product.id}>
                        <CardProduct.Header image={product.image}></CardProduct.Header>
                        <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                        <CardProduct.Footer price={product.price}></CardProduct.Footer>
                    </CardProduct>
                ))}
            </div>
            <div className="flex w-100 justify-center mt-5">
                <Counter></Counter>
            </div>
        </Fragment>
    )
}

export default ProductPage