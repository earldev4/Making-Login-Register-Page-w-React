import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const RegisterPages = ()=>{
    return(
        <AuthLayouts title="Register">
            <FormRegister/>
        </AuthLayouts>
    )
}

export default RegisterPages