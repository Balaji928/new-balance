import React from 'react'
import { Link } from 'react-router-dom'
import './Men.css'
import Mens from '../products/Mens'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart,deleteFromCart } from '../store/cartslice/Cartslice'

const Men = () => {
  const cartProducts = useSelector((Items) => Items.cart.cartItems);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
  };

  const deleteCart = (item) =>{
    dispatch(deleteFromCart(item));
  };
  return (
    <div>

      <section class="bred">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Men</li>

          </ol>
        </nav>
      </section>

      <section>
        <div class="row m1">
          <div class="col text-start">
            <h4>Men(589)</h4>
          </div>
        </div>
      </section>

      <section class="container-fluid">
        <div class="row m2 gap-1">
        <Link to='/shoe'  class="col-lg-4 life">
          <div >
            <h3>Shoes</h3>
          </div>
        </Link>

        <Link to='/t-shirts'  class="col-lg-4 win">
          <div >
          <h3>Clothing</h3>
          </div>
        </Link>

        <Link to='/accessories'  class="col-lg-4 acess">
          <div >
          <h3>Accessories</h3>
          </div>
        </Link>
        </div>
      </section>

      <section>
        <div class="row m3">
          <div class="col-lg-6 m3-1">
            <button class="text-start py-3 px-4">Show Fliter</button>
          </div>

          <div class="col-lg-6 m3-2">
            <button class="text-end py-2 px-4">Sort</button>
          </div>
        </div>
      </section>

      <section>
        <div class="row m4 mb-5 me-2">
          {Mens.map((item)=>
          <div class="col-lg-4 mb-5">
            <div class="card" key={item.id}>
              <img src={item.img} class="card-img-top" alt="..."/>
              {/* <div class="hover-image">
                <img class="default" src={item.img} alt="Default Image"/>
                <img class="hover" src={item.img1} alt="Hover Image"/>
              </div> */}
              <div class="card-body">
                <div>
                <div class="thumbnail-icon">
                  <img src={item.img} alt="Shoe Icon"/>
                </div>
                </div>
                <h5 class="card-title">{item.title}</h5>
                <h6 class="card-subtitle mb-2">{item.subtitle}</h6>
                <p class="card-subtitle mb-2 ">{item.gender}</p>
                <h4 class="card-subtitle ">${item.price}</h4>
                {cartProducts.find((items) => items.id === item.id) ? (
                    <button class="btn py-2" onClick={() => deleteCart(item)}>Remove From Bag</button>):(
                      <button class=" btn py-2" onClick={() => addCart(item)}>Add To Bag</button>
                    )}
              </div>
            </div>
          </div>
          )}

          {/* <div class="col-lg-4">
            <div class="card">
              <img src={grey1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">New</h5>
                <h6 class="card-subtitle mb-2 ">Made in USA 990v6</h6>
                <p class="card-subtitle mb-2 text-muted">Unisex</p>
                <h4 class="card-subtitle text-muted">$199.99</h4>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card">
              <img src={rug1} class="card-img-top" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">New</h5>
                <h6 class="card-subtitle mb-2 ">Made in USA Tech Pant</h6>
                <p class="card-subtitle mb-2 text-muted">Men's</p>
                <h4 class="card-subtitle text-muted">$249.99</h4>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section>
        <div class="row mb-5 m5">
          <button class="py-3 ">Load More</button>
        </div>
      </section>
    </div>
  )
}

export default Men