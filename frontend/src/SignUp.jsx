import NavBar from "./NavBar"
import { Link } from 'react-router-dom'
import { LockKeyhole } from 'lucide-react';
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';

import { useState } from 'react'
const SignUp = () => {
    const[errors,setErrors]=useState(
        {
             fullName: "",
            email: "",
            passWord: "",
            confirmPassword: ""
        }
    )
    const [showPassword, setShowPassword] = useState(false);
    const [error,setError]=useState("")
    const[success,setSuccess]=useState("")
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState(
        {
            fullName: "",
            email: "",
            passWord: "",
            confirmPassword: ""
        })
    const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    const handleConfirmPassword = () => {
        setshowConfirmPassword((confirmPassword) => !confirmPassword)
    }
    const handleChange=(event) =>
    {
        setError("")
        setSuccess("")
      setFormData((formData)=> ({
        
        ...formData,
        [event.target.name]:event.target.value,
      }));
      setErrors((errors)=> ({
        
        ...errors,
        [event.target.name]:"",
      }))


    }
    const handleSubmit=(event) =>
    {
        event.preventDefault();
        let newErrors={}
        if(!formData.fullName){
            newErrors.fullName="Please enter your full name"
        }
         if(!formData.email){
            newErrors.email="Please enter your email"
        }
         if(!formData.passWord){
            newErrors.passWord="Please enter your password"
        }
         if(!formData.confirmPassword){
            newErrors.confirmPassword="Please confirm your password"
         }
         else if(formData.passWord!==formData.confirmPassword)
         {
            newErrors.confirmPassword="Your paswords didn't match"
         }
         if(Object.keys(newErrors).length>0)
        {
            setErrors(newErrors);
        }
        else{
            setSuccess("Your account has been created scuccessfully")
            setFormData({
              fullName: "",
            email: "",
            passWord: "",
             confirmPassword: ""
    })
        }

    //     if(!formData.fullName || !formData.email || !formData.passWord || !formData.confirmPassword){
    //         setError("Please fill all the fields")
    // }
    // else if(formData.passWord!==formData.confirmPassword){
    //     setError("Your Password didn't match")
    // }
    // else{
    //     setSuccess("your accoount is created successfully")
    //     setError("")
    //     setFormData({
    //          fullName: "",
    //         email: "",
    //         passWord: "",
    //         confirmPassword: ""
    // })
    // }
}
    return (
        < div className="flex items-center flex-col gap-5">
            <NavBar />
            <h1 className="text-2xl text-blue-700 font-bold">Join BlogVerse</h1>
            <p className="  font-semibold text-xl text-gray-600 text-center"> Create your account and <br></br>start your Blogging journey today</p>
            <form  onSubmit= {handleSubmit}className="flex flex-col border-1 border-black w-1/3 p-7 items-center gap-5 rounded-2xl">
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p className="font-semibold text-md text-gray-700">Full Name</p>
                    <div className='relative'>
                        <input
                        
                        value={formData.fullName}
                        onChange={handleChange}
                        name="fullName"
                         type="text"
                        
                            placeholder="Enter Your Name"
                            className="  pl-12 border-1 w-full border-gr py-4 px-3 rounded-2xl focus:outline-none
                     focus:border-purple-500 " />
                        <User className='text-black absolute top-4 left-3' />
                        {errors.fullName && <p className="text-red-500"> {errors.fullName}</p>}
                    </div>

                </div>
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p className="font-semibold text-md text-gray-700">Email</p>
                    <div className='relative'>
                        <input
                        
                         value={formData.email}
                         onChange={handleChange}
                        name="email" 
                        type="text"
                            placeholder="Enter Your Email"
                            className="  pl-12 border-1 border-gray-700 w-full py-4 px-3 
                     rounded-2xl focus:outline-none
                     focus:border-purple-500"
                        />
                        < Mail className="text-black absolute top-4 left-3" />
                        {errors.email && <p className="text-red-500"> {errors.email}</p>}
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p className="font-semibold text-md text-gray-700">Password</p>
                    <div className='relative'>
                        <input
                        
                         value={formData.passWord}
                         onChange={handleChange}
                        name="passWord"
                         type={showPassword ? "password" : "text"}
                            placeholder="Enter Your Password"
                            className=" pl-12 border-1 border-gray-700 w-full py-4 px-3 
                     rounded-2xl 
                     focus:outline-none
                     focus:border-purple-500"/>
                        <LockKeyhole className='text-black absolute top-4 left-3' />
                        <p onClick={handlePassword}> {showPassword ? <Eye className='absolute right-3 top-4' /> : <EyeOff className='absolute right-3 top-4' />}</p>
                   </div>
                   {errors.passWord && <p className="text-red-500"> {errors.passWord}</p>}
                    
                </div>
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p className="font-semibold text-md text-gray-700">Confirm Password</p>
                    <div className='relative'>
                        <input 
                        
                         value={formData.confirmPassword}
                         onChange={handleChange}
                        name="confirmPassword"
                        type={showConfirmPassword ? "password" : "text"}
                            placeholder="Confirm your password"
                            className="  pl-12 border-1 border-gray-700 w-full py-4 px-3 
                     rounded-2xl 
                     focus:outline-none
                     focus:border-purple-500"/>
                        <LockKeyhole className='text-black absolute top-4 left-3' />
                        <p onClick={handleConfirmPassword}> {showConfirmPassword ? <Eye className='absolute right-3 top-4' /> : <EyeOff className='absolute right-3 top-4' />}</p>
                  </div>
                   {errors.confirmPassword && <p className="text-red-500"> {errors.confirmPassword}</p>}
                    
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className='h-5 w-5' />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <button type="submit" className="w-[90%] bg-purple-500 py-4 text-white rounded-xl font-semibold flex justify-center">   <User className="text-black " />Create Account</button>
                <div className="border-[0.5px] w-[90%] mt-4 border-gray-400"></div>
                <p className="font-semibold text-gray-700"> Already have an Account?<Link className="text-purple-500">Sign In here</Link></p>
                <Link to="/Home" className="font-semibold text-gray-700 rounded-xl w-[90%] py-4 cursor-pointert hover:bg-gray-200"> Back To Home</Link>
            </form>
        </div>

    )
}
export default SignUp