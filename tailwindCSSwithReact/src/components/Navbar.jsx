
function Navbar(){
    return(
        <>
    <div className="flex justify-around items-center mt-5 mx-12 w-auto md:w-auto lg:w-auto">
      <p className="font-bold mx-10 text-5xl">W.</p>
    <nav className=" text-gray-500">
      <ul className="flex gap-10 cursor-pointer mx-10 ">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>

    </div>
        </>
    )
}

export default Navbar;