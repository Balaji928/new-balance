import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/cartslice/Cartslice';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const deleteCart =(item) => {
    dispatch (deleteFromCart(item));
  };

  const incrementCart = (id, quantity) => {
    dispatch (updateQuantity ({id, quantity : quantity + 1}))
  }

  const decrementCart = (id, quantity) => {
   if (quantity > 1){
    dispatch (updateQuantity ({id, quantity : quantity - 1}))
   }
  }

  return (
    <div>
      <div class="row d-flex pt-5 ms-4 me-2 mb-5">
        {cartProducts.map((item)=>(
          <div class="col-lg-3 mt-5 pt-5 bs-1">
            <div class="card" key={item.id}>
              <img src={item.img} class="card-img-top" alt="..."/>
                <div className="card-body ">
                <div class="thumbnail-icon">
                  <img src={item.img} alt="Shoe Icon"/>
                </div>
                  <span className="badge bg-danger text-start end-0 m-2 position-absolute top-0 rounded-0 px-3 py-1">{item.dis}</span>
                      <h6 className="card-title text-start">{item.title}</h6>
                      <h6 class="card-subtitle mb-2">{item.subtitle}</h6>
                      <p class="card-subtitle mb-2 ">{item.gender}</p>
                      <p className="card-text text-start">${item.price} </p>
                     <button class="btn4 py-1 px-1">
                      <button class="btn1 py-1 px-1 update-btn" onClick={() => incrementCart(item.id, item.quantity)}> + </button>
                        Qty {item.quantity}
                        <button class="btn2 py-1 px-1 update-btn" onClick={() => decrementCart(item.id, item.quantity)}>-</button>
                        ${item.price * item.quantity}.00
                        <button class="btn3 py-1 px-3" onClick={() => deleteCart(item)}>Remove</button>
                     </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart