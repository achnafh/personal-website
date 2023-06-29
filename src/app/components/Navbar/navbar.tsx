import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav className=" flex w-full  bg-black text-white items-center justify-center font-main sticky top-0">
            <div className="flex w-[100%] px-52 justify-between h-16 bg-black text-white items-center">
                <div className = "text-white justify-center items-center">
                    <p className="text-white text-3xl">NAF.</p>
                </div>
                <div className = " text-white items-center text-lg">
                    <ul className="flex gap-[3vw]">
                        <li><a href="#" className="hover:text-gray-300">About</a></li>
                        <li><a href="#" className="hover:text-gray-300">Experience</a></li>
                        <li><a href="#" className="hover:text-gray-300">CCAs</a></li>
                        <li><a href="#" className="hover:text-gray-300">Project</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <button className="rounded-full bg-primary text-white px-4 py-1 hover:bg-pink-light text-md">Resume</button>
                </div>
            </div>
        </nav>
     );
}
 

export default Navbar;