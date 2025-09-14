const NavBar = () =>
{
    return(
        <div className="flex justify-around  h-12 items-center border-1 border-gray-500">
            <h1 className=" font-bold ">BlogVerse</h1>
            <button className="text-gray-700  bg-gray-200 px-5 py-2 rounded-lg cursor-pointer  hover:bg-blue-300">Home</button>
        <div className="flex gap-10">
            <button className="font-semibold text-gray-700  cursor-pointer  rounded-lg">signin</button>
            <button className="bg-blue-300 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-300">Signup</button>
            </div>
            </div>
    )
}
export default NavBar