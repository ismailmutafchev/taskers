export function PostService() {
    return (
        <section className="contact_section input login" id="login">
            <form id="post-service-form">
                <div className="custom_heading-container">
                    <h3 >Post Service</h3>
                </div>
                <div className="container">
                    <div className="col-md-6 mx-auto">
                        <form>

                            <label htmlFor="first-name">First Name</label>
                            <input id="logEmail" placeholder="John" name="first-name" type="text" />
                            <label htmlFor="last-name">Last Name</label>
                            <input id="logEmail" placeholder="Gotty" name="last-name" type="text" />
                            <label htmlFor="service">Service</label>
                            <input id="logPassword" type="text" placeholder="Service type" name="password" />
                            <label htmlFor="service">Service</label>
                            <input id="logPassword" type="text" placeholder="Service type" name="password" />
                            <div className="d-flex justify-content-center ">
                                <button>POST</button>
                            </div>
                        </form>
                    </div>
                </div>
            </form>
        </section>
    )
}