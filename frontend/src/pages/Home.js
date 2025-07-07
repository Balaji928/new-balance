import React from 'react'
import './Home.css'
import desktop from '../images/desktop.jpg'
import u99 from '../images/u99.webp'
import u990 from '../images/u990.webp'
import white from '../images/white.webp'
import polo from '../images/polo.webp'
import newarrival from '../images/newarrival.png'
import shoes from '../images/shoes.jpg'
import ch from '../images/ch.webp'
import accsses from '../images/accsses.jpg'
import table from '../images/table.jpg'
import boy from '../images/boy.jpg'
import shoe1 from '../images/shoe1.webp'
import shoe2 from '../images/shoe2.webp'
import shoe3 from '../images/shoe3.webp'
import shoe4 from '../images/shoe4.webp'
import black2 from '../images/black2.webp'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div class="hom">
      {/* <section>
        <div class="row">
          <div class="col offer">
            <img src={desktop}/>
          </div>
        </div>
      </section> */}

      <section>
        <div class="container-fluid">
        <div class="row season d-flex">
          <div class="col-lg-6">
            <h1>The Made in USA<br/> Seasonal Collection</h1>
            <p>The second drop from the Spring/Summer '25 Collection.<br/> Available April 10th</p>
            <Link to='/hoodie'><button>Shop Now</button></Link>
            <p class="p2">New Balance Made in USA footwear contains a domestic value of 70% or more.<br/> Made in USA makes up a limited portion of New Balance’s US sales</p>
          </div>

          <div class="col-lg-6 sea">
            {/* <img src={at}/> */}
          </div>
        </div>
        </div>
      </section>

      <section>
        <div class="row ">
          <div class="col usa">
            <h3>The Made in USA Collection</h3>
          </div>
        </div>

        <div class="row usa-1 mb-5 me-2">
          <div class="col-lg-3 col-sm-3">
            <div class="card">
            <Link to='/shoe'><img src={u99} class="card-img-top" alt="..."/></Link>
              <div class="card-body">
                <h5 class="card-title">New</h5>
                <h6 class="card-subtitle mb-2">Made in USA 990v6</h6>
                <p class="card-subtitle mb-2 text-muted">Unisex</p>
                <h4 class="card-subtitle text-muted">$199.99</h4>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-3">
            <div class="card">
            <Link to='/shoe'><img src={u990} class="card-img-top" alt="..."/></Link>
              <div class="card-body">
                <h5 class="card-title">New</h5>
                <h6 class="card-subtitle mb-2 ">Made in USA 990v6</h6>
                <p class="card-subtitle mb-2 text-muted">Unisex</p>
                <h4 class="card-subtitle text-muted">$199.99</h4>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-3">
            <div class="card">
            <Link to='/bottom'><img src={white} class="card-img-top" alt="..."/></Link>
              <div class="card-body">
              <h5 class="card-title">New</h5>
                <h6 class="card-subtitle mb-2 ">Made in USA Tech Pant</h6>
                <p class="card-subtitle mb-2 text-muted">Men's</p>
                <h4 class="card-subtitle text-muted">$249.99</h4>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-3">
            <div class="card">
            <Link to='/t-shirts'><img src={polo} class="card-img-top" alt="..."/></Link>
              <div class="card-body">
                <h5 class="card-title">New</h5>
                <h6 class="card-subtitle mb-2 ">Made in USA Polo</h6>
                <p class="card-subtitle mb-2 text-muted">Men's</p>
                <h4 class="card-subtitle text-muted">$194.99</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-5 usa-2">
          <div class="col-lg-12 col-sm-12"><Link to='/men'><button class="py-2 ">Shop The Full Collection</button></Link></div>
        </div>

        <div class="row mb-1">
          <h6>New Balance Made in USA footwear contains a domestic value of 70% or more. Made in USA makes up a limited portion of New Balance’s US sales.  </h6>
        </div>
      </section>

      <section>
        <div class="row">
          <div class="col shop ">
            <h3>Shop by category</h3>
          </div>
        </div>

        <div class="row shop-1 mb-5 me-2">
        <div class="col-lg-3 col-sm-3">
            <Link to='/men'>
            <div class="card sh">
              <img src={newarrival} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h6 class="card-subtitle mb-2 ">New Arrivals</h6>
              </div>
            </div>
            </Link>
          </div>

          <div class="col-lg-3 col-sm-3">
            <Link to='/shoe'>
            <div class="card sh">
              <img src={shoes} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h6 class="card-subtitle mb-2 ">Shoes</h6>
              </div>
            </div>
            </Link>
          </div>

          <div class="col-lg-3 col-sm-3">
           <Link to='/t-shirts'>
           <div class="card sh">
              <img src={ch} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h6 class="card-subtitle mb-2 ">Clothing</h6>
              </div>
            </div>
           </Link>
          </div>

          <div class="col-lg-3 col-sm-3">
            <Link to='/accessories'>
            <div class="card sh">
              <img src={accsses} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h6 class="card-subtitle mb-2 ">Accessories</h6>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </section>

      {/* <section>
      <div class="btn-group py-1" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
        <label class="f1 btn-outline-primary" for="btnradio1">Radio 1</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
        <label class="f1 btn-outline-primary" for="btnradio2">Radio 2</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
        <label class="f1 btn-outline-primary" for="btnradio3">Radio 3</label>
      </div>
      </section> */}

      <section>
        <div class="row">
          <div class="col-lg-6 col-sm-6">
            <div class="card tab" >
              <img src={table} class="card-img-top" alt="..."/>
              <div class="card-body col-sm-6">
                <h5 class="card-title">The 990v6</h5>
                <p class="card-text">Made in USA, worn anywhere</p>
                <Link to='/shoe'><button>Shop Now</button></Link>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-sm-6">
            <div class="card tab" >
              <img src={boy} class="card-img-top" alt="..."/>
              <div class="card-body col-sm-6">
                <h5 class="card-title">The 1000</h5>
                <p class="card-text">Worn by Eladio Carrión</p>
                <Link to='/t-shirts'><button class="">Shop Now</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="row">
          <div class="col rec">
            <h3>Recommended for you</h3>
          </div>
        </div>

        <div class="row rec-1 me-2">
        <div class="col-lg-3 col-sm-3">
            <div class="card rc">
            <Link to='/shoe'><img src={shoe1} class="card-img-top" alt="..."/></Link>
              <div class="card-body">
                <h5 class="card-title">Best seller</h5>
                <h6 class="card-subtitle mb-2 ">530</h6>
                <p class="card-subtitle mb-2 text-muted">Men's</p>
                <h4 class="card-subtitle text-muted">$99.99</h4>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-3">
            <div class="card rc">
            <Link to='/shoe'><img src={shoe2} class="card-img-top" alt="..."/></Link>
              <div class="card-body">
                <h5 class="card-title">Best seller</h5>
                <h6 class="card-subtitle mb-2 ">550</h6>
                <p class="card-subtitle mb-2 text-muted">Unisex</p>
                <h4 class="card-subtitle text-muted">$109.99</h4>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-3">
            <div class="card rc">
            <Link to='/shoe'><img src={shoe3} class="card-img-top" alt="..."/></Link>
              <div class="card-body">
                <h5 class="card-title">Selling Fast</h5>
                <h6 class="card-subtitle mb-2 ">480</h6>
                <p class="card-subtitle mb-2 text-muted">Women's</p>
                <h4 class="card-subtitle text-muted">$89.99</h4>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-3">
            <div class="card rc">
              {/* <Link to='/shoe'><img src={shoe4} class="card-img-top" alt="..."/></Link> */}
              <Link to='/shoe'>
              <div class="hover-image">
                <img class="default" src={shoe4} alt="Default Image"/>
                <img class="hover" src={black2} alt="Hover Image"/>
              </div>
              </Link>
              <div class="card-body">
                {/* <h5 class="card-title">New</h5> */}
                <h6 class="card-subtitle mb-2 ">740</h6>
                <p class="card-subtitle mb-2 text-muted">Unisex</p>
                <h4 class="card-subtitle text-muted">$109.99</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="row mb-5 mt-3">
          <h6 class="mb-5 pb-5">Discover the perfect blend of timeless style, quality, and performance. Shop New Balance shoes, sneakers, and athletic wear.</h6>
        </div>
      </section>
    </div>
  )
}

export default Home