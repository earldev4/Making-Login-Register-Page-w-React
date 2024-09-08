const Buttons = (props)=>{
    const {variant, children, width, onClick=()=>{}, type="button"} = props
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white ${width} hover:bg-cyan-400`} type={type} onClick={onClick}>{children}</button>
    )
}

export default Buttons