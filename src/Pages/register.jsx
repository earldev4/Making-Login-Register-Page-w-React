import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const RegisterPages = ()=>{
    return(
        <AuthLayouts title="Register">
            <FormRegister/>
            <p className="block text-slate-700 text-sm font-bold mb-2">Already have an account? <Link to="/login" className="text-violet-500 hover:text-violet-400">Log in!</Link></p>
        </AuthLayouts>
    )
}

export default RegisterPages