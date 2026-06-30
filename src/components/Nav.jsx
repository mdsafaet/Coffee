
import React from 'react'
import '../app.css' 
import { Link, NavLink } from 'react-router'


export const Nav = () => {
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to={'/'} >Home</Link>
        <Link to={'/listedbooks'} >Listed Books</Link>
        <Link to={'/dashboard'} >Dashboard</Link>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Books</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-8">

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "text-green-600 font-bold border-b-2 border-green-600"
            : "text-gray-700 hover:text-green-600"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/listedbooks"
        className={({ isActive }) =>
          isActive
            ? "text-green-600 font-bold border-b-2 border-green-600"
            : "text-gray-700 hover:text-green-600"
        }
      >
        Listed Books
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-green-600 font-bold border-b-2 border-green-600"
            : "text-gray-700 hover:text-green-600"
        }
      >
        Dashboard
      </NavLink>
   
    
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/'} className="btn">Signup</Link>
  </div>
</div>



    </div>
  )
}
