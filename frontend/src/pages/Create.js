import React from 'react'

const Create = () => {
  return (
    <div>
      <section>
        <div class="card shadow-sm" >
          <div class="sm1 text-center py-3 ">
            <strong>📦 Free shipping for members.</strong>
          </div>

          <div class="d-flex text-center border-bottom">
            <div class="w-50 py-2 tab-active">Log in</div>
            <div class="w-50 py-2 text-muted">Create account</div>
          </div>

          <div class="card-body">
            <form>
              <div class="mt-3 mb-4">
                <input type="email" class="form-control fc py-3" placeholder="Email" required/>
              </div>

              <div class=" position-relative">
                <input type="password" class="form-control fc py-3" placeholder="Password" required/>
              </div>

              <div class="mt-3 mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
              </div>

              <button type="submit" class="btn5 py-3">Login</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Create