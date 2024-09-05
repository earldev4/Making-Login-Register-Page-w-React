import Labels from "./label"
import Inputs from "./Input"

const InputForm = (props)=>{
    const {children, type, placeholder, name} = props
    return (
        <div className="mb-6">
            <Labels htmlfor={name}>{children}</Labels>
            <Inputs type={type} placeholder={placeholder} name={name}/>
        </div>
    )
}

export default InputForm