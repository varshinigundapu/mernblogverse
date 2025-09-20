import {Link} from "react-router-dom"
const NavBar = () =>
{
    return(
        <div className=" w-full flex justify-around  h-12 items-center border-1 border-gray-500">
            <h1 className=" font-bold ">BlogVerse</h1>
            <Link to="/Home" className="text-gray-700  bg-gray-200 px-5 py-2 rounded-lg cursor-pointer  hover:bg-blue-300">Home</Link>
        <div className="flex gap-10">
            <Link  to="/SignIn"className="font-semibold text-gray-700  cursor-pointer  rounded-lg">signin</Link>
            <Link  to="/SignUp"className="bg-blue-700 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-300">Signup</Link>
            </div>
            </div>
    )
}
export default NavBar