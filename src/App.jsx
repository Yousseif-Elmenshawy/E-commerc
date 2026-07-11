import './App.css'
import NavBar from './layout/nav'
import Footer from './layout/footer'

import Home from './components/Home'
import Cart from './components/cart'
import Form from './components/Form'
import Form2 from './components/Form2'
import { CartProvider } from './components/cartPorvider'

import { Routes , Route } from 'react-router-dom'


export default function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/Form' element={<Form />}/>
          <Route path='/Form2' element={<Form2 />}/>
          <Route path='/' element={<Footer />}/>
        </Routes>
        <Footer />
      </CartProvider>
      
    </>
  )
}
