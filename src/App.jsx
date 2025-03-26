import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [secret, setSecret] = useState('')
const handleClick=async()=>{
const response=await fetch("https://authentication-basics.vercel.app/admin/login",{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({secret})
})
const data=await response.json()
console.log(data)
localStorage.setItem('token',data.token)

}

  return (
    <>
    <div>
      <input 
      value={secret} onChange={e=>setSecret(e.target.value)}/>
      <button onClick={handleClick}>Login</button>
    </div>
    </>
  )
}

export default App
