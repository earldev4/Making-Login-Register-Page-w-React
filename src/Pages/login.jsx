import FormLogin from "../components/Fragments/FormLogin"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const LoginPages = ()=>{
    return (
        <AuthLayouts title="Login">
            <FormLogin/>
        </AuthLayouts>
    )
}

export default LoginPages