// import React from 'react';
import { useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from 'react';


const Editbags = () => {
  const{id}=useParams();

  const [productsItems,setproductsItems]=useState ({
    name:"",
    title:"",
    des:"",
    price:"",
    food:"",
    qunantity:"",
  })

  useEffect(()=>{
   fetch(`http://localhost:6005/snsbybags/${id}`)
     .then((res)=>res.json())
     .then((data)=>setproductsItems(data))
    },[])

  const handleUpdate=(event)=>{
  event.preventDefault();
  const form=event.target;
  const title= form.title.value;
  const des=form.des.value;
  const food=form.food.value;
  const price=form.price.value;
  const img=form.img.value;
  const update={title,des,food,price,img,};
  console.log(update);

  fetch(`http://localhost:6005/allproductbags/${id}`,{
      method:"PATCH",
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(update),
      })
      .then((res)=>res.json())
      .then((data)=>{
      toast.warn("successfully updated");
      window.location.href="/deletebags";
      })
  }
  return (
    <div class="up">
      <ToastContainer />
        <div class="card update6">
          <div class="card-body update5">
            <form onSubmit={handleUpdate}>
                <h2>EDIT</h2>
                <div class="update0">
                    <label value="title"><b>TITLE</b></label>
                    <input type="text" name="title" defaultValue= {productsItems.title} className='ms-3'/>
                </div>
                <div class="update1">
                    <label value="img"><b>IMAGE</b></label>
                    <input type='img' name="img" defaultValue={productsItems.img} className='ms-3'/>
                    </div>
                    <div class="update2">
                    <label value="food"><b>FOOD</b></label>
                    <input type='text'name="food" defaultValue={productsItems.food}className='ms-3'/>
                    </div>
                    <div class="update3">
                    <label value="des"><b>DES</b></label>
                    <input type='text' name="des" defaultValue={productsItems.des}className='ms-3'/>
                    </div>
                    <div class="update4">
                    <label value="price"><b>PRICE</b></label>
                    <input type='numbers'name="price" defaultValue={productsItems.price} className='ms-3'/>
                </div>
                <section className='update9'>

                <div class="update7 ms-3">
                    <button type="submit" class="btn btn-primary">UPDATE</button>
                </div>
              </section>
            </form>
          </div>
      </div>
   </div>
  // <div class="up">
  //       <ToastContainer/>
  //         <div class="card update6">
  //           <div class="card-body update5">
  //             <form onSubmit={handleUpdate} >
  //                 <h2 class="py-3">Upload Page</h2>

  //                 <div class="update0">
  //                   <div class="form-floating ">
  //                     <input type="text" class="form-control" id="floatingInput" name="title"/>
  //                     <label  value="title">Title</label>
  //                   </div>
  //                 </div>

  //                 <div class="update1">
  //                   <div class="form-floating ">
  //                     <input type="text" class="form-control" id="floatingInput" name="img"/>
  //                     <label value="img">Image</label>
  //                   </div>
  //                 </div>

  //                     <div class="update2">
  //                       <div class="form-floating">
  //                         <input type="text" class="form-control" id="floatingInput" name="food"/>
  //                         <label  value="food" class="">Collection</label>
  //                       </div>
  //                     </div>

  //                     <div class="update3">
  //                       <div class="form-floating">
  //                         <input type="text" class="form-control" id="floatingInput" name='des'/>
  //                         <label value="des">Des</label>
  //                       </div>
  //                     </div>

  //                     <div class="update4">
  //                       <div class="form-floating ">
  //                         <input type="number" class="form-control" id="floatingInput" name='price'/>
  //                         <label value="price">Price</label>
  //                       </div>
  //                 </div>

  //                 <div class="update4">
  //                     <button type="submit" class="btn py-3">Upload</button>
  //                 </div>
  //             </form>
  //         </div>
  //       </div>
  //   </div>
  )
}

export default Editbags
