import { useState } from "react";
import { Menu, MenuAlt3 } from "heroicons-react";
import {Link} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Logo from "./navbar/Logo";

const Header = () => {
    

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="absolute lg:z-0 lg:z-0 z-[1] w-full top-0 left-0 shadow-md">
            <div className="md:flex items-center justify-between bg-white py-4 lg:px-10 lg:px-10 px-7">
                <Logo />
                <div className="flex text-xs">
                    <Navbar openMenu={openMenu} />
                    <div className="lg:static absolute right-20 top-6 text-gray-800 hover:text-gray-400 cursor-pointer">
                        EN | ID
                    </div>
                </div>
                <div onClick={()=> setOpenMenu(!openMenu)} className={`absolute right-0 top-6 mr-8 cursor-pointer  duration-500 lg:hidden `}>
                    {!openMenu ? <Menu /> : <MenuAlt3 />}
                </div>
            </div>
        </div>
    )
}

export default Header;