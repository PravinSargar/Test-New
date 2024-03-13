import React, { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
export const Password = () => {
    const [password, setPassword] = useState(true)
  return (
    <div>
        <h1>Password</h1>
        <div>
            <input type={password ? "password" : "text"}  />
            <div className='eye'>
                {password ? <IoMdEyeOff onClick={()=>setPassword(false)}/> : <IoEye onClick={()=>setPassword(true)}/>}
            </div>
        </div>
    </div>
  )
}
