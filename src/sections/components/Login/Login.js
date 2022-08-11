import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { AuthContext } from '../../../context/authContext';
import * as authService from '../../../Hooks/Auth'

export function Login() {
        const {userLogin} = useContext(AuthContext)
        const navigate = useNavigate()
        const onSubmit = (e) => {
          e.preventDefault();
      
          const {
            email,
            password,
          } = Object.fromEntries(new FormData(e.target))
      
          authService.login(email, password)
            .then(authData => {
              userLogin(authData)
              navigate('/')
            })
            .catch((error) => {
              console.log(error)
              navigate('/')
            })
      
        }
    return (
        <section className="contact_section input login" id="login">
            <form onSubmit={onSubmit} id="login-form">
                <div className="custom_heading-container">
                    <h3 >Login</h3>
                </div>
                <div className="container">
                    <div className="col-md-6 mx-auto">

                        <label htmlFor="email">Email</label>
                        <input id="logEmail" placeholder="Enter Email" name="email" type="text" />
                        <label htmlFor="password">Password</label>
                        <input id="logPassword" type="password" placeholder="Enter Password" name="password" />
                        <div className="d-flex justify-content-center ">
                            <button type="submit">LOGIN</button>
                        </div>
                        <div className="container signin">
                            <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}