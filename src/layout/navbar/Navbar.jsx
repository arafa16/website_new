import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Dropdown from './Dropdown';

const Navbar = ({openMenu}) => {
    let Menus = [
        {id: 1, name: "HOME", link:"/", subs:[
            {id: 1, name: "Sub 1", link: "/sub"},
            {id: 2, name: "Sub 2", link: "/sub"},
            {id: 3, name: "Sub 3", link: "/sub"},
        ] },
        {id: 2, name: "ABOUT US", link:"/" },
        {id: 3, name: "PRODUCT & SERVICE", link:"/product" },
        {id: 4, name: "PROJECT PORTOFOLIO", link:"/" },
        {id: 5, name: "NEWS & EVENT", link:"/", subs:[
            {id: 4, name: "Sub 1", link: "/sub"},
            {id: 5, name: "Sub 2", link: "/sub"},
            {id: 6, name: "Sub 3", link: "/sub"},
        ] },
        {id: 6, name: "CAREER", link:"/" },
        {id: 7, name: "CONTACT US", link:"/" },
    ];

    const [openSub, setOpenSub] = useState(false);

  return (
    <div>
      <ul className={`lg:flex lg:static lg:items-center absolute bg-white lg:pb-0 pb-4 lg:pl-0 pl-5 right-0 lg:items-center lg:shadow-none shadow-md lg:w-auto w-[12rem] lg:z-0 z-[-1] mr-7 transition-all duration-500 ease-in ${openMenu ? 'top-[77px]' : 'top-[-490px]' }  `}>
        {Menus.map((menu, index)=>(
            <li key={index} className="lg:ml-8 lg:mt-0 mt-5">
                <Link to={menu.link} className="text-gray-800 hover:text-gray-400 duration:500" onClick={()=> setOpenSub(!openSub)} >{menu.name}</Link>
                {menu.subs ? 
                    <Dropdown submenus={menu.subs} openSub={openSub} />
                    : ''
                }
            </li>
        ))}
    </ul>
    </div>
  )
}

export default Navbar
