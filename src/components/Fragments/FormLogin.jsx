import InputForm from "../Elements/Input"
import Buttons from "../Elements/Buttons"

const FormLogin = ()=>{
    return (
        <form action="">
          <InputForm 
            children="Email" 
            type="email" 
            placeholder="example@gmail.com" 
            id="email"
          />
          <InputForm 
            children="Password" 
            type="password" 
            placeholder="********" 
            id="password"
          />
          <Buttons variant="bg-cyan-500">Login</Buttons>
        </form>
    )
}

export default FormLogin