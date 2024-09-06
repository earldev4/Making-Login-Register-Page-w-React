import Title from "../Elements/Title"
import SubTitle from "../Elements/SubTitle"
import {Link} from "react-router-dom"

const AuthLayouts = (props)=>{
    const {children, title, type} = props
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs bg-neutral-200 rounded p-2">
                <Title variant="text-blue-600">{title}</Title>
                <SubTitle>Please, input your account first!</SubTitle>
                {children}
                <p className="block text-slate-700 text-sm font-bold mb-2">
                    {/* {type==="login" && (<p>Don't have an account? <Link to="/register" className="text-violet-500 hover:text-violet-400">Sign Up!</Link></p>)}
                    {type==="register" && (<p>Already have an account? <Link to="/login" className="text-violet-500 hover:text-violet-400">Login!</Link></p>)} */}
                    <Navigation type = {type}></Navigation>
                </p>
            </div>
        </div>
    )
}

const Navigation = ({type})=>{
    if (type === "login"){
        return (
            <p>Don't have an account? <Link to="/register" className="text-violet-500 hover:text-violet-400">Sign Up!</Link></p>
        )
    } else{
        return (
            <p>Already have an account? <Link to="/login" className="text-violet-500 hover:text-violet-400">Login!</Link></p>
        )
    }
}

export default AuthLayouts