export function Nav() {
    return(<header className="header_section">
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbarnd" href="index">
                <span>
                    Heustonn
                </span>
            </a>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav  ">
                        <li className="nav-item active">
                            <a className="nav-link" href="index">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about"> About </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="service"> Services </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="how-it-works"> How It Works </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="find-services">Find Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="post">Post Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </nav>
    </div>
</header>)
}