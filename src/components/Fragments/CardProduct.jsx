import Buttons from "../Elements/Buttons"

const CardProduct = (props)=>{
    const {children} = props
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2 flex flex-col justify-between">
                {children}
            </div>
    )
}
const Header = (props)=>{
    const {image} = props
    return (
        <a href="#">
            <img src={image} alt="product" className="p-3 rounded-t-lg"/>
        </a>
    )
}
const Body = (props)=>{
    const {title, children} = props
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-purple-300">{title}</h5>
            </a>
            <p className="text-m text-gray-400 ">{children}</p>
        </div>
    )
}
const Footer = (props)=>{
    const {price} = props
    return (
        <div className="flex item-center justify-between p-2">
            <span className="text-xl font-bold text-gray-400">{price}</span>
            <Buttons variant="bg-purple-300" width="w-max">Add to cart</Buttons>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct