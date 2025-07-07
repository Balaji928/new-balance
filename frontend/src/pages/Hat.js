import React from 'react'
import './Hat.css'
import Hats from '../products/Hats'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart,deleteFromCart } from '../store/cartslice/Cartslice'

const Hat = () => {
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
            <li class="breadcrumb-item"><a href="/accessories">Accessories</a></li>
            <li class="breadcrumb-item active" aria-current="page">Hats</li>
          </ol>
        </nav>
      </section>

    <section>
      <div class="row  ht1">
        <div class="col  text-start">
          <h4>Men's Gym Bags & Backpacks (16)</h4>
        </div>
      </div>
    </section>

    <section>
          <div class="row ht2   mb-5">
            {Hats.map((item)=>
              <div class="col-lg-4 mb-5">
              <div class="card" key={item.id}>
                <img src={item.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <h6 class="card-subtitle mb-2">{item.subtitle}</h6>
                  <p class="card-subtitle mb-2 ">{item.gender}</p>
                  <h4 class="card-subtitle ">${item.price}</h4>
                  {cartProducts.find((items) => items.id === item.id) ? (
                    <button class="btn py-3" onClick={() => deleteCart(item)}>Remove From Bag</button>):(
                      <button class=" btn py-3" onClick={() => addCart(item)}>Add To Bag</button>
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

export default Hat