import Buttons from "../components/Elements/Buttons"
import CardProduct from "../components/Fragments/CardProduct"

const ProductPage = ()=>{
    return (
        <div className="flex justify-center">
            <CardProduct>
                <CardProduct.Header image="/images/bag1.jpg"></CardProduct.Header>
                <CardProduct.Body title="Tas Gucci">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente provident tenetur. 
                    Asperiores minus recusandae nam facilis dolorum eos vel enim assumenda architecto reiciendis, aperiam debitis! Distinctio 
                    perferendis deserunt dolorum!</CardProduct.Body>
                <CardProduct.Footer></CardProduct.Footer>
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/hoodie.jpg"></CardProduct.Header>
                <CardProduct.Body title="Hoodie">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente provident tenetur. 
                    Asperiores minus recusandae nam facilis dolorum eos vel enim assumenda architecto reiciendis, aperiam debitis! Distinctio 
                    perferendis deserunt dolorum!</CardProduct.Body>
                <CardProduct.Footer></CardProduct.Footer>
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/jeans.jpg"></CardProduct.Header>
                <CardProduct.Body title="Jeans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente provident tenetur. 
                    Asperiores minus recusandae nam facilis dolorum eos vel enim assumenda architecto reiciendis, aperiam debitis! Distinctio 
                    perferendis deserunt dolorum!</CardProduct.Body>
                <CardProduct.Footer></CardProduct.Footer>
            </CardProduct>
        </div>
    )
}

export default ProductPage