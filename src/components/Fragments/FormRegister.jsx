import InputForm from "../Elements/Input"
import Buttons from "../Elements/Buttons"

const FormRegister = ()=>{
    return (
        <form action="">
          <InputForm 
            children="Full Name" 
            type="text" 
            placeholder="John Doe" 
            id="fulname"
          />
          <InputForm 
            children="Email" 
            type="email" 
            placeholder="johndoe@gmail.com" 
            id="email"
          />
          <InputForm 
            children="Password" 
            type="password" 
            placeholder="Password must be over 8 characters" 
            id="password"
          />
          <InputForm 
            children="Confirm Password" 
            type="password" 
            placeholder="Password must be over 8 characters" 
            id="password"
          />
          <Buttons variant="bg-cyan-500">Register</Buttons>
        </form>
    )
}

export default FormRegister