import React from 'react'

const Navitem = (props) => {
    return (
        <li className='nav-item'>
            <div>{props.children}</div>
        </li>
    )
}

const NavitemDropDown = (props) => {
    return (
        <li className='nav-item dropdown'>
            <div>{props.children}</div>
        </li>
    )
}

export default Navitem
export { NavitemDropDown }