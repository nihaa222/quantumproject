import { useState } from 'react'


function App() {

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleClick = async () => {
    try {
      const response = await fetch(`${backendUrl}/api`)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }


  return (
    <>
      <button onClick={handleClick} className='bg-red-300'>Hello</button>
    </>
  )
}

export default App
