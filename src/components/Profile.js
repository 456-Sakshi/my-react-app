import {useState} from 'react';

function Profile() {
  
    return (

    <div>
         <form>
         <div class="mb-3">
            <label for="exampleInputUser" onsubmit="(return validateForm())" class="form-label">UserName</label>
            <input type="user" class="form-control" id="exampleInputUser"/>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
            <div id="passwordHelpBlock" class="form-text">
              Your password must be 8-20 characters long, contain letters and numbers, special characters, , and must not contain spaces, or emoji.
            </div>
          </div>
        
        </form>
    </div>
    );
  }

export default Profile;