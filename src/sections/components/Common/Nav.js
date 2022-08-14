import { Link } from "react-router-dom"

import { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'

export function Nav() {
    const { user } = useContext(AuthContext)

    return (<header className="header_section">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
                <Link className="navbarnd" to="/">
                    <span>
                        Heustonn
                    </span>
                </Link>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                        {user.email ?
                            <ul className="navbar-nav  ">

                                <li className="nav-item active">
                                    <Link className="nav-link" to="/my-posts">My Heuston<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="post">Post Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="services"> Services </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="logout">Logout</Link>
                                </li>
                            </ul>
                            :
                            <ul className="navbar-nav  ">

                                <li className="nav-item">
                                    <Link className="nav-link" to="about"> About </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="services"> Services </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="how-it-works"> How It Works </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="register">Register</Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </div >
    </header >)
}