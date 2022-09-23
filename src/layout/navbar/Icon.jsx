import React from 'react';

import { Menu, MenuAlt3 } from "heroicons-react";

const Icon = ({openMenu, setOpenMenu}) => {
    return (
        <div onClick={()=> setOpenMenu(!openMenu)} className={`absolute right-0 top-6 mr-8 cursor-pointer  duration-500 lg:hidden `}>
            {!openMenu ? <Menu /> : <MenuAlt3 />}
        </div>
    )
}

export default Icon
