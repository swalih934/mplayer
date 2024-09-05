import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import History from './Pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/his' element={<History />} />
        <Route path='/Log' element={<Login />} />
        <Route path='/Reg' element={<Register />} />



      </Routes>
      <Footer />
      <ToastContainer />

    </>
  )
}

export default App
