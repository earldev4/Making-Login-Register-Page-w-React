import Buttons from "../components/Elements/Buttons"
import CardProduct from "../components/Fragments/CardProduct"

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

const ProductPage = ()=>{
    return (
        <div className="flex justify-center">
            {products.map((product)=>(
                <CardProduct key = {product.id}>
                    <CardProduct.Header image={product.image}></CardProduct.Header>
                    <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price}></CardProduct.Footer>
                </CardProduct>
            ))}
        </div>
    )
}

export default ProductPage