const Buttons = (props)=>{
    const {variant, children, width} = props
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white ${width} hover:bg-cyan-400`} type="submit">{children}</button>
    )
}

export default Buttons