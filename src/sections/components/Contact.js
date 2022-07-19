export function Contact() {
    return(<section className="contact_section layout_padding">
    <div className="custom_heading-container">
      <h3 className=" ">
        Booking Online
      </h3>
    </div>
    <div className="container layout_padding2-top">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form action="">
            <div>
              <input type="text" placeholder="NAME" />
            </div>
            <div>
              <input type="email" placeholder="EMAIL" />
            </div>
            <div>
              <input type="text" placeholder="PHONE NUMBER" />
            </div>
            <div>
              <select name="" id="">
                <option value="" disabled selected>TYPE OF SERVICE</option>
                <option value="">Service 1</option>
                <option value="">Service 2</option>
                <option value="">Service 3</option>
              </select>
            </div>
            <div>
              <input type="text" className="message-box" placeholder="MESSAGE" />
            </div>
            <div className="d-flex justify-content-center ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </section>)
}