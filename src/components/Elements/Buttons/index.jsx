const Buttons = (props)=>{
    const {variant, children} = props
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white w-full hover:bg-cyan-400`} type="submit">{children}</button>
    )
}

export default Buttons