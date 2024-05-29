import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src="./imgs/logo.png" alt="" />
        </div>
        <ul className="links">
          <li>
            <Link to={"/"}>SHOP</Link>
          </li>
          <li>
            <Link to={"/"}>COLLECTIVE</Link>
          </li>
          <li>
            <Link to={"/"}>DESIGNERS</Link>
          </li>
          <li>
            <Link to={"/"}>ABOUT US</Link>
          </li>
          <li>
            <Link to={"/"}>CONTACT</Link>
          </li>
        </ul>
        <div className="menu">
          <div>
            <img src="./imgs/menu.svg" alt="" />
          </div>
          <div>
            <img src="./imgs/search.svg" alt="" />
          </div>
          <div className='cart_icon'>
            <img src="./imgs/shopping-cart.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar