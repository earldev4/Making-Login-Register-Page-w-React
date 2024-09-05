import Labels from "./label"
import Inputs from "./Input"

const InputForm = (props)=>{
    const {children, type, placeholder, id} = props
    return (
        <div className="mb-6">
            <Labels htmlfor={id}>{children}</Labels>
            <Inputs type={type} placeholder={placeholder} id={id}/>
        </div>
    )
}

export default InputForm