import React from 'react'
import './Accessories.css'
import { Link } from 'react-router-dom'
import Accessoriess from '../products/Accessoriess'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart,deleteFromCart } from '../store/cartslice/Cartslice'

const Accessories = () => {
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
            <li class="breadcrumb-item active" aria-current="page">All Accessories</li>
          </ol>
        </nav>
      </section>

    <section>
      <div class="row  as1">
        <div class="col  text-start">
          <h4>Men's Accessories (110)</h4>
        </div>
      </div>
    </section>

    <section class="container-fluid">
      <div class="row as2 mb-5 gap-1">
        <Link to='/sock'  class="col-lg-3 sock">
          <div>
            <h3>Socks</h3>
          </div>
        </Link>

        <Link to='/bag'  class="col-lg-3 bag">
          <div>
            <h3>Bags</h3>
          </div>
        </Link>

        <Link to='/insole'  class="col-lg-3 insole">
          <div >
            <h3>Insoles</h3>
          </div>
        </Link>

        <Link to='/hat'  class="col-lg-3 hat">
          <div>
            <h3>Hats</h3>
          </div>
        </Link>

      </div>
    </section>

    <section>
      <div class="row b2 mb-5">
        {Accessoriess.map((item)=>
        (<div class="col-lg-4 mb-5">
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
        </div>)
        )}
      </div>
    </section>
  </div>
  )
}

export default Accessories