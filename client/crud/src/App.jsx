import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='bg-cover h-screen bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0co0IQi8pV1hHqdhJaoPUdyby61tFfA3FCA&s")]'>
 <Navbar/>
 <Outlet/>
 </div>
    </>
  )
}

export default App
