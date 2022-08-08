export function ServiceCard(props) {
  
  return (<div className="col-md-3">
    <div className="box b-1">
      <div className="img-box">
        <img src={props.img} alt="" />
      </div>
      <div className="detail-box">
        <h6>
          {props.service}
        </h6>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  </div>)
}