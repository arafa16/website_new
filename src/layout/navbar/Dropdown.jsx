import React from 'react';
import {Link} from "react-router-dom";

const Dropdown = ({submenus, openSub}) => {
  return (
    <ul className={`lg:absolute lg:min-w-[10%] lg:bg-white lg:shadow-md lg:mt-8 duration-500 ${!openSub ? 'hidden' : ''}  `}>
        {submenus.map((sub, index)=>(
          <li key={index} className=" px-7 py-4 hover:bg-gray-100 ">
              <Link to={sub.link}>{sub.name}</Link>
          </li>
        ))}
    </ul>
  )
}

export default Dropdown;
