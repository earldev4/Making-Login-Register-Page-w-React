import Title from "../Elements/Title"
import SubTitle from "../Elements/SubTitle"
const AuthLayouts = (props)=>{
    const {children, title} = props
    return (
        <div className="w-full max-w-xs bg-neutral-200 rounded p-2">
            <Title variant="text-blue-600">{title}</Title>
            <SubTitle>Please, input your account first!</SubTitle>
            {children}
        </div>
    )
}

export default AuthLayouts