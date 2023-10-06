import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react"

function Navbar(){

  const[toggle,setToggle]=useState(false);


    return(
        <>
    <div className="flex justify-around items-center mt-5 mx-12 w-auto md:w-auto lg:w-auto">
      <button onClick={() => setToggle(!toggle)} className="absolute right-10 sm:hidden  max-sm:top-8 max-sm:right-16">{toggle ? <CloseIcon /> : <MenuIcon/>}</button>
      <p className="font-bold mx-10 text-5xl max-sm:absolute max-sm:top-5 max-sm:left-1">W.</p>
    <nav className=" text-gray-500">
      <ul className={`flex gap-10 cursor-pointer mx-10 max-sm:w-96 max-sm:opacity-0 max-sm:flex-col max-sm:absolute max-sm:left-0 max-sm:text-center max-sm:bg-white transition-all duration-500 ease-in ${toggle ? `p-10 top-20 max-sm:opacity-100`:`top-[-490px]`}`}>
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