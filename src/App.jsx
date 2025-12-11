import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="min-h-screen bg-gray-50">
      <Header />
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
