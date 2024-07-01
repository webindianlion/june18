import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <ul className='navbar-nav d-flex flex-row'>
            <li className='nav-item p-3'> <Link to="/comp1">Comp 1</Link> </li>
            <li className='nav-item p-3'> <Link to="/comp2">Comp 2</Link> </li>
            <li className='nav-item p-3'> <Link to="/comp3">Comp 2</Link> </li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Menu