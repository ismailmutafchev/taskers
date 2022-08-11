import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { AuthContext } from '../../../context/authContext';
import * as authService from '../../../Services/Auth'

export function Register() {
    const { userRegister } = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target))

        authService.register(email, password)
            .then(authData => {
                userRegister(authData)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                navigate('/')
            })
    }

    return (<section id="register">
        <form onSubmit={onSubmit} className="register contact_section input" id="register-form">
            <div className="custom_heading-container">
                <h3 className="custom_heading-container">Register</h3>
            </div>
            <div className="container">
                <div className="col-md-6 mx-auto">

                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username" />
                    <label htmlFor="email">Email</label>
                    <input id="regEmail" type="text" placeholder="Enter Email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input id="regPassword" type="password" placeholder="Enter Password" name="password" />
                    <label htmlFor="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass" />
                    <div className="gender">
                        <select name="">
                            <option value="" disabled selected>GENDER</option>
                            <option value="">Female</option>
                            <option value="">Male</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <button>REGISTER</button>
                    </div>
                    <div className="container signin">
                        <p>Already have an account?<Link to="/login">Sign in</Link>.</p>
                    </div>
                </div>
            </div>
        </form>
    </section>
    )
}