const SignUp = () => {
    return (
        <div className="flex items-center flex-col mt-10 gap-5">
            <h1 className="text-2xl text-blue-700 font-bold">Join BlogVerse</h1>
            <p className="  font-semibold text-xl text-gray-600 text-center">Create your account and <br></br>start your Blogging journey today</p>
            <form className="flex flex-col border-1 border-black w-1/3 p-7 items-center gap-5 rounded-2xl">
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p  className="font-semibold text-md text-gray-700">Full Name</p>
                    <input type="text" 
                    placeholder="Enter Your Name"
                     className=" border-1 border-gray-700 w-full py-4 px-3 
                     rounded-2xl 
                     focus:outline-none
                     focus:border-purple-500"/>
                     </div>
                    
                     <div className="w-[90%] flex flex-col gap-2 ">
                    <p  className="font-semibold text-md text-gray-700">Email</p>
                    <input type="text" 
                    placeholder="Enter Your Email"
                     className=" border-1 border-gray-700 w-full py-4 px-3 
                     rounded-2xl 
                     focus:outline-none
                     focus:border-purple-500"/>
                     </div>
                     <div className="w-[90%] flex flex-col gap-2 ">
                    <p  className="font-semibold text-md text-gray-700">Password</p>
                    <input type="text" 
                    placeholder="Enter Your Password"
                     className=" border-1 border-gray-700 w-full py-4 px-3 
                     rounded-2xl 
                     focus:outline-none
                     focus:border-purple-500"/>
                     </div>
                     <div className="w-[90%] flex flex-col gap-2 ">
                    <p  className="font-semibold text-md text-gray-700">Confirm Password</p>
                    <input type="password" 
                    placeholder="Confirm your password"
                     className=" border-1 border-gray-700 w-full py-4 px-3 
                     rounded-2xl 
                     focus:outline-none
                     focus:border-purple-500"/>
                     </div>
                   <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className='h-5 w-5'/>
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                    </div>  
                    <button className="w-[90%] bg-purple-500 py-4 text-white rounded-xl font-semibold"> Create Account</button>
                    <div className="border-[0.5px] w-[90%] mt-4 border-gray-400"></div>
                    <p className="font-semibold text-gray-700"> Already have an Account?<span className="text-purple-500">Sign In here</span></p>
                    <button className="font-semibold text-gray-700 rounded-xl w-[90%] py-4 cursor-pointert hover:bg-gray-200"> Back To Home</button>
            </form>
        </div>

    )
}
export default SignUp