export function Login() {
    return (
        <section className="contact_section input login" id="login">
            <form id="login-form">
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
                            <button>LOGIN</button>
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