import React from 'react';
import '../assets/LoginModal.scss';

const LoginModal: React.FC = () => {
    return (
        <div id="login" className="login-modal">
            <div className="overlay"></div>
            <div className="login-container">
            <h1>Login to Your Account</h1>
            <h5>Access your dashboard to manage your services.</h5>
            <form className="login-form">
                <div className="input-container">
                <i className="icon user-icon"></i>
                <input type="text" placeholder="Username" />
                </div>
                <div className="input-container">
                <i className="icon lock-icon"></i>
                <input type="password" placeholder="Password" />
                </div>
                <button type="submit" className="submit-button">LOGIN</button>
            </form>
            <div className="links">
                <a href="#">Create Account</a>
                <a href="#">Need Help?</a>
            </div>
            <div className="footer">
                <a href="#">About Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms Of Use</a>
            </div>
            </div>
        </div>
    );
  };
  
  export default LoginModal;
