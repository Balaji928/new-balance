import React from 'react'
import './Tshirts.css'
import Tshirtses from '../products/Tshirtses'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart,deleteFromCart } from '../store/cartslice/Cartslice'

const Tshirts = () => {
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
            <li class="breadcrumb-item"><a href="/men">Men</a></li>
            <li class="breadcrumb-item"><a href="/men">Clothing</a></li>
            <li class="breadcrumb-item active" aria-current="page">All Clothing</li>
          </ol>
        </nav>
      </section>

      <section>
        <div class="row tee1">
          <div class="col text-start">
            <h4>Men's Workout & Casual Clothes (220)</h4>
          </div>
        </div>
      </section>

      <section class="container-fluid">
        <div class="row tee2 gap-1">
          <Link to='/hoodie'  class="col-lg-3 hood">
            <div>
              <h3>Hoodies</h3>
            </div>
          </Link>

          <Link to='/graphictee'  class="col-lg-3 tee">
            <div>
              <h3>Graphic Tees</h3>
            </div>
          </Link>

          <Link to='/matchingset'  class="col-lg-3 set">
            <div >
              <h3>Matching Sets</h3>
            </div>
          </Link>

          <Link to='/longsleeve'  class="col-lg-3 long">
            <div>
              <h3>Long Sleeve</h3>
            </div>
          </Link>

        </div>
      </section>

      <section>
        <div class="row tee3 mb-5">
          {Tshirtses.map((item)=>
          <div class="col-lg-4 mb-5">
            <div class="card" key={item.id}>
              <img src={item.img} class="card-img-top" alt="..."/>
              <div class="card-body">
              <div class="thumbnail-icon">
                    <img src={item.img} alt="Shoe Icon"/>
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
        </div>
      </section>
    </div>
  )
}

export default Tshirts