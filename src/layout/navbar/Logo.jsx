import React from 'react'

const Logo = (props) => {
  const {children, className} = props;
  return (
    <div className="cursor-pointer items-center">
        <img className={className} src={require('../../assets/images/logo.png')} />
    </div>
  )
}

export default Logo
