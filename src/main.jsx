import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPages from './Pages/login.jsx'
import RegisterPages from './Pages/register.jsx'
import ErrorPages from './Pages/404.jsx'
import ProductPage from './Pages/products.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    errorElement: <ErrorPages/>
  },
  {
    path:"/login",
    element: <LoginPages/>,
  },
  {
    path:"/register",
    element: <RegisterPages/>,
  },
  {
    path:"/product",
    element: <ProductPage></ProductPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
