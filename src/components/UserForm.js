import {useState} from 'react';

function UserForm() {
      const [selectedImage, setSelectedImage] = useState(null);
  // let loginForm = document.getElementById("loginForm");

  //   loginForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  
  //   let username = document.getElementById("user");
  //   let password = document.getElementById("password");
  
  //   if (username.value == "" || password.value == "") {
  //     alert("Ensure you input a value in both fields!");
  //   } else {
  //     // perform operation with form input
  //     alert("This form has been successfully submitted!");
  //     console.log(
  //       `This form has a username of ${username.value} and password of ${password.value}`
  //     );
  
  //     username.value = "";
  //     password.value = "";
  //   }
  //   });

    return (

    <div>
         <form id="loginForm">
         <div class="mb-3">
            <label onsubmit="(return validateForm())" aria-required="true" class="form-label">UserName</label>
            <input type="user" id="user" class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" id="email" class="form-control" placeholder="name@example.com"/>
          </div>
          
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" id="password" class="form-control" />
            <div id="passwordHelpBlock" class="form-text">
              Your password must be 8-20 characters long, contain letters and numbers, special characters, , and must not contain spaces, or emoji.
            </div>
          </div>
        <div class="mb-3">
          <input
            type="file"
            name="myImage"
            // Event handler to capture file selection and update the state
            onChange={(event) => {
              console.log(event.target.files[0]); // Log the selected file
            setSelectedImage(event.target.files[0]); // Update the state with the selected file
            }}
          />
        </div>

        <div class="mb-3">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div> 
        </form>
    </div>
    );
  }

export default UserForm;