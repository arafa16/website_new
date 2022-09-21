import React from 'react'

const Dropdown = ({submenus, openSub}) => {
  return (
    <ul className={`lg:absolute lg:min-w-[10%] lg:bg-white lg:shadow-md lg:mt-8 ${!openSub ? 'hidden' : ''}  `}>
        {submenus.map((sub, index)=>(
          <li key={index} className=" px-3 py-4 hover:bg-gray-100 ">{sub.name}</li>
        ))}
    </ul>
  )
}

export default Dropdown;
