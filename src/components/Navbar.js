import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <ul className="links">
      <li><Link to="/">Главная</Link></li>
      <li><Link to="/games">Игры</Link></li>
    </ul>
  </nav>
);

export default Navbar