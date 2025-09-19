const SignIn = () => {
    return (
        
        <div className="flex items-center  flex-col mt-10 gap-5  rounded-2xl">
            <form className="flex flex-col border-1 rounded-2xl w-1/3 p-5 item-center gap-5 ">
                <div className="w-[90%] flex flex-col gap-2 border border-gray-50">
                    <p className="font-semibold text-shadow-black text-xl text-center"> Sign In<br></br> Access Your Account</p>
                    </div>

                    <p className="font-semibold  text-left text-center text-gray-700">Email Address</p>
                    <input type="text"
                        placeholder="sample@gmail.com"
                        className=" border-1 border-black w-full  py-4 px-3
                     rounded-2xl 
                     focus:outline-none
                     focus:border-blue-500"/>
               
                
                    <p className=" text-left font-semibold text-center text-gray-700 rounded-2xl">Password</p>
                    <input type="text"
                        placeholder="sample123"
                        className="border-1 border-black w-full py-4 px-3  rounded-xl focus:outline-none focus:border-blue-500" />
                
                <div className="flex  ">
                    <input type="checkbox" name="" id="" className='h-5 w-5' />
                    <p>Remember me</p> <span className="text-blue-500 px-2  text-right">forgot password?</span>

                </div>
                <div>
                    <button className="font-semibold w-[90%]   text-white cursor-pointer bg-blue-500 rounded-xl py-4 "> Sign In</button>
                    <div className="border-[0.5px] w-[90%] mt-4 border-black  flex flex-hr"></div>
                    <p className=" font-semibold text-black-500   text-right flex  gap-2">Don't Have An account?<span className="text-blue-500  ">Create One Here</span></p>
                    <button className="text-xl font-semibold text-black rounded-xl w-[90%] py-3 cursor-pointer hover:bg-text-blue"></button>

                </div>
            </form>

        </div>
        
    )
}
export default SignIn
