import React from 'react'

const Menu = (props) => {
    const {children} = props;

    return (
        <div className="flex text-xs">
            {children}
        </div>
    )
}

export default Menu
