import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function App(){
return (
<AppProvider>
<div className='min-h-screen flex flex-col'>
<Navbar />
<main className='flex-1'>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/menu' element={<Menu/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
</Routes>
</main>
<Footer />
</div>
</AppProvider>
)
}