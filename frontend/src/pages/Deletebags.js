import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import './Delete.css'

const Deletebags = () => {

  const[ProductItems,setProductsItems]=useState([]);

  useEffect(()=>{
    fetch(`http://localhost:6005/snsbags`)
    .then((res)=>res.json())
    .then((data)=>
    setProductsItems(data))
  },[])



   const DeleteItems=(id)=>{
    fetch(`http://localhost:6005/deletebags/${id}`,{
      method:"DELETE",})
      .then((res)=>res.json())
      .then((data)=>{
          toast.error('deleted successfully');
      setProductsItems((prevProductItems)=>prevProductItems.filter((Items)=>Items._id!==id))
   })
  }
  return (
    <div>
      <div className='card table2'>
        <div className='card-body'>
          <table>
            <div className='table1 '>
            <thead>
              <tr>
                <th >TITLE</th>
                <th>IMAGE</th>
                <th>DES</th>
                <th>PRICE</th>
                <th>COLLECTIONS</th>
                <th>QUANTITY</th>
                <th>ACTIONS</th>
              </tr>
              </thead>

              {ProductItems?.map((Item) =>(
                <tr key={Item._id}>
                  <td>{Item.title}</td>
                  <td><img src={Item.img} alt=''/></td>
                  <td>{Item.des}</td>
                  <td>{Item.price}</td>
                  <td>{Item.food}</td>
                  <td>{Item.quantity}</td>
                  <td>
                    <button className='table3' placeholder='delete'onClick={()=>DeleteItems(Item._id)}>Delete</button>
                    <Link to={`/editbags/${Item._id}`}><button className='table4'>Edit</button></Link>
                  </td>
                </tr>
              ))}
            </div>
          </table>
      </div>
    </div>
  </div>
  )
}

export default Deletebags