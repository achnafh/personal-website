
const Navbar = () => {
    return ( 
        <nav className=" flex w-full  bg-black text-white items-center justify-center font-main">
            <div className="flex w-[70%] justify-between h-16 bg-black text-white items-center">
                <div className = "text-white justify-center items-center">
                    <p className="text-white text-3xl">NAF.</p>
                </div>
                <div className = " text-white items-center text-lg">
                    <ul className="flex gap-[2vw]">
                        <li><a href="#" className="hover:text-gray-300">About</a></li>
                        <li><a href="#" className="hover:text-gray-300">Experience</a></li>
                        <li><a href="#" className="hover:text-gray-300">CCAs</a></li>
                        <li><a href="#" className="hover:text-gray-300">Project</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <button className="rounded-full bg-primary text-white px-4 py-1 hover:bg-[#E298EE] text-md">Resume</button>
                </div>
            </div>
        </nav>
     );
}
 

export default Navbar;