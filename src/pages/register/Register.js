import React from 'react';
import "./Register.css"
// const Register = () => {
//   return (
//     <div className='register'>
//       <div className="top">
//         <div className="wrapper">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className='logo'/>
//             <button className="loginButton">Signin</button>
//         </div>
//       </div>
//       <div className="container">
//         <h1>Unlimited movies, TV shows, and more.</h1>
//         <h2>Watch anywhere. Cancel anytime.</h2>
//         <p>
//         Ready to watch? Enter your email to create or restart your membership.
//         </p>
//         <div className="input">
//             <input type="email" placeholder='email address'/>
//             <button className="registerButton">Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;




import { useRef } from "react";
import { useState } from "react";
// import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (  
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://liteapks.com/wp-content/uploads/2022/12/netflix-cover-e1673026955778.jpeg"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}