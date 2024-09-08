import InputForm from "../Elements/Input"
import Buttons from "../Elements/Buttons"

const FormLogin = ()=>{
  const handleLogin = (event)=>{
    event.preventDefault()
    if (event.target.email.value !== null && event.target.password.value !== null){
      localStorage.setItem("email", event.target.email.value)
      localStorage.setItem("password", event.target.password.value)
      window.location.href="/product"
    } else{
      return 0
    }
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