import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  const submitHandler =(e) => {
    e.preventDefault()
    // console.log("email is ", email)
    // console.log("password is ", password)
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  }


  return (
    <div className='flex items-center justify-center h-screen w-screen '>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e) => {
                submitHandler(e)
            }}
            action="" 
            className='flex flex-col items-cente justify-center'>
                <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                    // console.log(e.target.value)
                }}
                 required 
                 className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                 required
                 className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-4 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='text-white outline-none   bg-emerald-600 rounded-full text-xl py-3 px-5 mt-16'>Log in</button>
            </form>

        </div>

    </div>
  )
}

export default Login