import * as useData from '../../../Services/useData'

export function EditPost({createPostService}) {

    const onSubmit = (e) => {
        e.preventDefault();


        const newPost = Object.fromEntries(new FormData(e.target))

        if (Object.values(newPost !== "" )) {
            useData.getById(newPost)
            .then(res => {
                createPostService(res)
            })   
        }
    }


    return (
        <section className="contact_section input login" id="login">
            <form id="post-service-form" onSubmit={onSubmit}>
                <div className="custom_heading-container">
                    <h3>Post Service</h3>
                </div>
                <div className="container">
                    <div className="col-md-6 mx-auto">

                        <label htmlFor="first-service">First Service Word</label>
                        <input id="first-service" placeholder="Cleaning" name="serviceOne" type="text" />
                        <label htmlFor="second-service">Second Service Word</label>
                        <input id="second-service" placeholder="Roofs" name="serviceTwo" type="text" />
                        <label htmlFor="name">Name</label>
                        <input id="name" placeholder="Gotty" name="name" type="text" />
                        <label htmlFor="price">Price</label>
                        <input id="price" type="text" placeholder="£10" name="price" />
                        <label htmlFor="service">Service</label>
                        <input id="service" type="text" placeholder="...description" name="description" />
                        <label htmlFor="img">Img</label>
                        <input id="img" type="text" placeholder="img" name="img" />
                        <div className="d-flex justify-content-center ">
                            <button type='submit'>POST</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}