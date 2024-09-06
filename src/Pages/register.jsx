// import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const RegisterPages = ()=>{
    return(
        <AuthLayouts title="Register" type="register">
            <FormRegister/>
        </AuthLayouts>
    )
}

export default RegisterPages