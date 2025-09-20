import NavBar from "./NavBar"
import {Link} from'react-router-dom'
import { Mail } from 'lucide-react';
import { LockKeyhole} from 'lucide-react'
import {useState} from'react'
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';

const SignIn = () => {
    const [showPassword,setShowPassword]=useState(false);
        
        const handlePassword=() =>{
            setShowPassword((password)=>!password)
        }
        
    return (

        <div className="flex items-center  flex-col  gap-5  rounded-2xl">
            <NavBar />
            <form className="flex flex-col border-1 rounded-2xl w-[30%] p-5 items -center gap-5 ">
                <div className="w-[90%] flex flex-col gap-2 border border-gray-50">
                    <p className="font-semibold text-shadow-black text-xl text-center"> Sign In<br></br> Access Your Account</p>
                </div>
<div className='relative'>
                <p className="font-semibold  text-left  text-gray-700">Email Address</p>
                <input type="text"
                    placeholder="sample@gmail.com"
                    className=" pl-12 border-1 border-black w-full  py-4 px-3
                     rounded-2xl 
                     focus:outline-none
                     focus:border-blue-500"/>
                      < Mail className="text-black absolute top-9 left-3 "/>
                     </div>

<div className='relative'>
                <p className=" text-left font-semibold  text-gray-700 rounded-2xl">Password</p>
                <input type={showPassword?"password":"text"}
                    placeholder="sample123"
                    className=" pl-12 border-1 border-black w-full py-4 px-3  rounded-xl focus:outline-none focus:border-blue-500" />
                     <LockKeyhole className='text-black absolute top-9 left-3'/>
                      <p onClick={handlePassword}> {showPassword?<Eye className='absolute right-3 top-9'/>:<EyeOff className='absolute right-3 top-9'/>}</p>
</div>
                <div className="flex ">
                   
                        <input type="checkbox" name="" id="" className='h-5 w-5' />
                        <p className="text-black" >Remember me</p>
              <p className="text-blue-500 px-2  text-right">forgot password?</p>

        </div>

    <div>
        <button className="font-semibold w-[90%]   text-white cursor-pointer bg-blue-500 rounded-xl py-4 "> Sign In</button>
        <div className="border-[0.5px] w-[90%] mt-4 border-black  flex flex-hr"></div>
        <p className=" font-semibold text-black-500   text-right flex  gap-2">Don't Have An account?<Link className="text-blue-500  ">Create One Here</Link></p>
        <button className="text-xl font-semibold text-black rounded-xl w-[90%] py-3 cursor-pointer hover:bg-text-blue"></button>

    </div>
            </form >

        </div >
        
        
    )
}
export default SignIn
