import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <section class="container-fluid all">
        <div class="row nav-bar">
          <div class="col-lg-6 col-sm-6 nv1">
          <ul class="nav-links">
            <Link to='/'><img src={logo}/></Link>
          {/* </div> */}

          {/* <div class="col-lg-4"> */}
            {/* <ul class="nav-links"> */}
              {/* <li>New</li> */}
              <Link to='/men'><li>Men</li></Link>
              <Link to='/t-shirts'><li>T-Shirts</li></Link>
              <Link to='/shoe'><li>Shoes</li></Link>
              <Link to='/bottom'><li>Bottoms</li></Link>
              <Link to='/jacket'><li>Jackets</li></Link>
              <Link to='/accessories'><li>Accessories</li></Link>
            </ul>
          </div>

          {/* <div class="col-lg-4 nav-item">
            <div class="input-group ">
              <span class="input-group-text bg-light border-end-0">
                <CiSearch />
              </span>
              <input type="text" class="form-control border-start-0 " placeholder="Search"/>
            </div>
          </div> */}

          <div class="col-lg-6 col-sm-6">
          {/* <div class="input-group ">
              <span class="input-group-text bg-light border-end-0">
                <CiSearch />
              </span>
              <input type="text" class="form-control border-start-0 " placeholder="Search"/>
          </div> */}
          {/* <div> */}
            <ul class="nav-items">

              <Link to='/login'><li><button class="py-2 px-4 rounded-pill">LOGIN</button></li></Link>
              <Link to='/uploadbags'><li><button class="py-2 px-4 rounded-pill">UPLOAD</button></li></Link>
              <Link to='/register'><li><LuUserRound /></li></Link>
              <Link to='cart'><li><HiOutlineShoppingCart /></li></Link>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar