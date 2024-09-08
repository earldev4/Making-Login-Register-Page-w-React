import InputForm from "../Elements/Input"
import Buttons from "../Elements/Buttons"

const FormLogin = ()=>{
  const handleLogin = (event)=>{
    event.preventDefault()
    localStorage.setItem("email", event.target.email.value)
    localStorage.setItem("password", event.target.password.value)
    window.location.href="/product"
  }
    return (
        <form onSubmit={handleLogin}>
          <InputForm 
            children="Email" 
            type="email" 
            placeholder="example@gmail.com" 
            name="email"
          />
          <InputForm 
            children="Password" 
            type="password" 
            placeholder="********" 
            name="password"
          />
          <Buttons variant="bg-cyan-500" width="w-full" type="submit">Login</Buttons>
        </form>
    )
}

export default FormLogin