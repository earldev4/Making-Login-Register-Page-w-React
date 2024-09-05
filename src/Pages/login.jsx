import { Link } from "react-router-dom"
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const LoginPages = ()=>{
    return (
        <AuthLayouts title="Login">
            <FormLogin/>
            <p className="block text-slate-700 text-sm font-bold mb-2">Don't have an account? <Link to="/register" className="text-violet-500 hover:text-violet-400">Sign Up!</Link></p>
        </AuthLayouts>
    )
}

export default LoginPages