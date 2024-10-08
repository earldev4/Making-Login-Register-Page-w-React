const Inputs = (props)=>{
    const {type, placeholder, id} = props
    return (
        <input type={type} className="text-sm border rounded py-2 px-3 text-slate-700 w-full placeholder: opacity-75" placeholder={placeholder} id={id}/>
    )
}

export default Inputs