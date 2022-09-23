import React, {useState, useEffect, useRef} from 'react'
import {Link} from "react-router-dom";
import Dropdown from './Dropdown';
import {Menus} from './ListMenu';

const Navbar = ({openMenu}) => {
    
    const [openSub, setOpenSub] = useState(Menus);

    let menuRef = useRef();

    useEffect(()=>{
        let handleMenu = (event) => {
            if(!menuRef.current.contains(event.target)){
                setOpenSub(Menus);
            }
        }

        document.addEventListener("mousedown", handleMenu);

        return () => {
            document.removeEventListener("mousedown", handleMenu);
        };
    })
    

    const clickHandler = name => () => {
        setOpenSub(items => 
            items.map(item => ({
                ...item,
                active: item.name === name
            }))
        );
    };

    return (
        <div className='flex'>
            <ul className={`lg:flex lg:static lg:items-center absolute bg-white lg:pb-0 pb-4 lg:pl-0 pl-5 right-0 lg:items-center lg:shadow-none shadow-md lg:w-auto w-[16rem] lg:z-0 z-[-1] mr-7 transition-all duration-500 ease-in ${openMenu ? 'top-[77px]' : 'top-[-790px]' }  `}>
                {openSub.map( (item, index) =>(
                   <li ref={menuRef} key={index} className={`lg:mx-4 lg:my-0 my-4 text-gray-800 hover:text-gray-400 cursor-pointer `} onClick={clickHandler(item.name)}>
                        <Link to={`${item.subs ? '' : item.link}`}>{item.name}</Link>
                        {item.subs ? 
                            <Dropdown submenus={item.subs} openSub={item.active} />
                            : ''
                        }
                    </li> 
                ))}
            </ul>
            <div className="lg:static absolute right-20 top-6 text-gray-800 hover:text-gray-400 cursor-pointer">
                EN | ID
            </div>
        </div>
    )
}

export default Navbar
