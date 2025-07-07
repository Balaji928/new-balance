import React from 'react'
import './Upload.css'
import { ToastContainer ,toast } from 'react-toastify';

const Upload = () => {

  const handleSubmit=(event)=>{

    event.preventDefault();
    const form=event.target;
    const title=form.title.value;
    const img=form.img.value;
    const food=form.food.value;
    const des=form.des.value;
    const price=form.price.value;
    const quantity=1;

    if(title==="" || img==="" ||des==="" || food==="" || price==="")
    {
      toast.warn('fill Required ');
    }
    else {
      const foods={title,img,des,food,price,quantity};
      // console.log(foods,"foods in object ");

      fetch('http://localhost:6005/upload',{
        method:"POST",
        headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(foods),
      })
        // .then((res)=>res.json())
        .then((data)=>{
          toast.success('added successfully');
          form.reset();
          window.location.href="/delete"
        })
    }
  }
  return (
    <div class="ub">
    <div class="up">
      <ToastContainer/>
        <div class="card upload6">
          <div class="card-body upload5">
            <form onSubmit={handleSubmit} >
                <h2 class="py-3">Upload Page</h2>

                <div class="upload0">
                  <div class="form-floating ">
                    <input type= "text" class="form-control" id="floatingInput" name="title"/>
                    <label for="floatingInput" value="title">Title</label>
                  </div>
                </div>

                <div class="upload1">
                  <div class="form-floating ">
                    <input type="text" class="form-control" id="floatingInput" name="img"/>
                    <label for="floatingInput" value="img">Image</label>
                  </div>
                </div>

                    <div class="upload2">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" name="food"/>
                        <label for="floatingInput" value="food" class="">Collection</label>
                      </div>
                    </div>

                    <div class="upload3">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" name='des'/>
                        <label for="floatingInput" value="des">Des</label>
                      </div>
                    </div>

                    <div class="upload4">
                      <div class="form-floating ">
                        <input type="number" class="form-control" id="floatingInput" name='price'/>
                        <label for="floatingInput" value="price">Price</label>
                      </div>
                </div>

                <div class="upload7">
                    <button type="submit" class="btn py-3">Upload</button>
                </div>
            </form>
        </div>
      </div>
      </div>
  </div>
  )
}

export default Upload
