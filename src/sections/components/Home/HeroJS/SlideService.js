export function SlideService(props) {

    let rating = ''
    if(props.rating <= 1.4){
        rating = <div><i className="fa-regular fa-star"></i></div>
    }else if(props.rating <= 2.4){
        rating = <div><i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i></div>
    }else if(props.rating <= 3.4){
        rating = <div><i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i></div>
    }else if(props.rating <= 4.4){
        rating = <div><i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i></div>
    }else if(props.rating <= 5){
        rating = <div><i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i></div>
    }


    return(<div className="slider_item-box layout_padding2">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="img-box">
                    <div>
                        <img src={props.img} alt="" className="" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="detail-box">
                    <div>
                        <h1>{props.name} -</h1>
                            
                        <h1>
                            {props.serviceOne}
                            <span>
                                {props.serviceTwo}
                            </span>
                        </h1>
                        <p>
                            {props.description}
                        </p>
                        <div>Rating = {props.rating} {rating} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
}