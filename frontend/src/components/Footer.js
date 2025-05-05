import React from 'react'
import './Footer.css'
import logo from '../images/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import brine from '../images/brine.svg'
import warror from '../images/warror.svg'
import teamsports from '../images/teamsports.svg'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <section>
        <div class="row mb-5">
          <div class="col-lg-6 col-sm-6 f1 d-flex">
            <p>Be the first to know about new arrivals</p>
          </div>
          <div class="col-lg-6 col-sm-6 f2">
            <Link to='/signup'><button>Sign Up</button></Link>
          </div>
        </div>
      </section>

      <section>
        <div class="row f3">
          <div class="col-lg-4 col-sm-4">
            <div class="row">
              <div class="col-lg-6 col-sm-6 f3-1">
                <h5>Help</h5>
                <p>Contact us</p>
                <p>Start a return</p>
                <p>Track your order</p>
                <p>Become a member</p>
                <p>Size guide</p>
                <p>FAQ</p>
                <p>How early access works</p>
              </div>

              <div class="col-lg-6 col-sm-6 f3-2">
                <h5>Shop</h5>
                <p>Find a store</p>
                <p>Gift cards</p>
                <p>Shipping information</p>
                <p>Sale exclusions</p>
                <p>Custom uniforms</p>
                <p>Reconsidered</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-4">
            <div class="row">
                <div class="col-lg-6 col-sm-6 f3-3">
                  <h5>About Us</h5>
                  <p>Our purpose</p>
                  <p>Responsible leadership</p>
                  <p>New Balance Foundation                  </p>
                  <p>Careers</p>
                  <p>The TRACK at New Balance</p>
                  <p>Press box</p>
                  <p>Medical Plan Information</p>
                </div>

                <div class="col-lg-6 col-sm-6 f3-4">
                  <h5>For You</h5>
                  <p>Special discounts</p>
                  <p>Idea submission</p>
                  <p>Affiliate program</p>
                  <p>Counterfeit products</p>
                  <p>Accessibility statement</p>
                </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-4 f4">
            <div class="row">
              {/* <div class="col"> */}
                <h4>Fearlessly Independent</h4>
                <Link to='/'><img src={logo}/></Link>
                <p>Independent since 1906, we empower people through sport and craftsmanship to create positive change in communities around the world.</p>
              {/* </div> */}
            </div>

            <div class="row col-sm-12">
              <ul class="f5 col-sm-12">
                <li><FaInstagram /></li>
                <li><FaFacebookF /></li>
                <li><FaXTwitter /></li>
                <li><FaYoutube /></li>
                <li><FaPinterestP /></li>
                <li><FaTiktok /></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="row mt-5">
          <div class="col mt-5 f6">
            <ul>
              <li>New Balance family of brands</li>
              <li><img src={brine} /></li>
              <li><img src={warror}/></li>
              <li><img src={teamsports}/></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer