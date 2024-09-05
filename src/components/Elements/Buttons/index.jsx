const Buttons = (props)=>{
    const {variant, children} = props
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white w-full`} type="submit">{children}</button>
    )
}

export default Buttons