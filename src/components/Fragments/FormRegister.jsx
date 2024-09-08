import InputForm from "../Elements/Input"
import Buttons from "../Elements/Buttons"

const FormRegister = ()=>{
    return (
        <form action="">
          <InputForm 
            children="Full Name" 
            type="text" 
            placeholder="John Doe" 
            name="fulname"
          />
          <InputForm 
            children="Email" 
            type="email" 
            placeholder="johndoe@gmail.com" 
            name="email"
          />
          <InputForm 
            children="Password" 
            type="password" 
            placeholder="Password must be over 8 characters" 
            name="password"
          />
          <InputForm 
            children="Confirm Password" 
            type="password" 
            placeholder="Password must be over 8 characters" 
            name="password"
          />
          <Buttons variant="bg-cyan-500" width="w-full">Register</Buttons>
        </form>
    )
}

export default FormRegister