const ProductCard = () => {
    return (
        <div className="border-4 border-black-100 w-[350px] flex flex-col items-center gap-10 py-4 rounded-xl ">
            <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-4 to-black rounded-full" />
            <div className="flex  flex-col gap-5 items-center">
                <h2 className="font-bold text-[50px] text-blue-600"> Product 1</h2>
                <p className="text-xl text-gray-700  text-center  font-mono"> This is a referrential Product out of stock</p>
                <p className=" font-bold text-[25px] text-green-500">$132.99</p>
            </div>
            <button className="bg-blue-400 text-white w-[200px] py-4 rounded-xl cursor-pointer hover:bg-blue-900">Add to card</button>
        </div>
    )

}
export default ProductCard