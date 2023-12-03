import React from 'react';
import './background.css'; 

const Background = () => {
  // return (
  //   <div className="main-container">
  //     <div className="top-vector">
  //       <img src="C:\Users\Mohammed\Desktop\appscrip\src\images\foreground.png" alt="Top Vector" />
  //     </div>
  //     <div className="content">
  //       <div className="login-form">
  //         {/* Your login form */}
  //         <h2>Login</h2>
  //         <form>
  //           {/* Include your login form fields here */}
  //           <input type="text" placeholder="Username" />
  //           <input type="password" placeholder="Password" />
  //           <button type="submit">Login</button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="main-container">
    <div className="login-page">
      <div className="left-side">
        <h1>A Creator's Paradise</h1>
        <p>Were Creativity Meets Success</p>
      </div>
      <div className="right-side">
        <form className="login-form">
          <img className='google' src='images/google1.png'/>
            <div className="form-group1">
              <input type="text" placeholder='First Name*' name="first-name" className='firstname'/>
              <input type="text" placeholder='Last Name*' name="last-name"  className='lastname'/>
            </div>
          <div className="form-group">
            <input type="email" id="email" placeholder='Email*' name="email" />
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder='Password*' name="password" />
          </div>
          <p className='time'>(GMT+05:30) india standard Time - Calcutta</p>
          <button type="submit">Signup as a user</button>
          <p className='timetext'>By signing up you agree to our Terms & Conditions and Privacy Policy. and confirm that you are at least 18 years old.</p>   
          {/* <p className='timetext'>____________________________________OR____________________________________</p>    */}
          
          <button type="submit">Signup as a creator</button>
          <p className='time'>Already have an account ? <span className='logi'> Login</span></p>
       </form>
      </div>
    </div>
    </div>
  );
};

export default Background;
