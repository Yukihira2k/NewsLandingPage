
function Navbar(){
    return(
        <>
    <div className="flex justify-around items-center mt-5 mx-12 w-auto md:w-auto lg:w-auto">
      <p className="font-bold mx-10 text-5xl">W.</p>
    <nav className=" text-gray-500">
      <ul className="flex gap-10 cursor-pointer mx-10 ">
        <li className="hover:text-orange-400">Home</li>
        <li className="hover:text-orange-400">New</li>
        <li className="hover:text-orange-400">Popular</li>
        <li className="hover:text-orange-400">Trending</li>
        <li className="hover:text-orange-400">Categories</li>
      </ul>
    </nav>

    </div>
        </>
    )
}

export default Navbar;