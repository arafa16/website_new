import { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Logo from "./navbar/Logo";
import Icon from "./navbar/Icon";
import Menu from "./navbar/Menu";

const Header = () => {
    
    let menuRef = useRef();
    useEffect(()=>
        {
            let handleMenu = (event) => {
                if(!menuRef.current.contains(event.target)){
                    setOpenMenu(false);
                }
            }

            document.addEventListener("mousedown", handleMenu);

            return () => {
                document.removeEventListener("mousedown", handleMenu);
            };
        }
    )

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="fixed lg:z-0 lg:z-0 z-[1] w-full top-0 left-0 shadow-md">
            <div ref={menuRef} className="md:flex items-center justify-between bg-white py-4 lg:px-10 lg:px-10 px-7">
                <Logo className="max-h-10" />
                <Menu>
                    <Navbar openMenu={openMenu} />
                </Menu>
                <Icon  openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
        </div>
    )
}

export default Header;