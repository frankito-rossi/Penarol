import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div>
    <nav className="bg-amber-500 border border-black  p-4 shadow">
      <ul className = 'flex space-x-6 justify-end'>
        <li>
          <NavLink to="/"
          className={({ isActive }) => isActive ? "bg-black text-yellow-500 p-5 shadow" : "bg-amber-500 text-black p-4 hover:bg-yellow-400"}>
          Home</NavLink>
        </li>
        <li>
          <NavLink to="/cuadro"
          className={({ isActive }) => isActive ? "bg-black text-yellow-500 p-5 shadow" : "bg-amber-500 text-black p-4 hover:bg-yellow-400"}>
          Cuadro</NavLink>
        </li>
        <li>
          <NavLink to="/contact"
          className={({ isActive }) => isActive ? "bg-black text-yellow-500 p-5 shadow" : "bg-amber-500 text-black p-4 hover:bg-yellow-400"}>
          Contact</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
