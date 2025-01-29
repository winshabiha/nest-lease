import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
