import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Layout from "./Layout"
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="products/:productId" element={<ProductDetails/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
    </Route>
  ) 
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}/>
    </Provider>
  </StrictMode>,
)
