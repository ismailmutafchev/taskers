export function HowItWorksCard(props) {
    return(
    <div className={props.className}>
    <div className="img-box">
      <img src={props.img} alt="" />
    </div>
    <div className="name">
      <h6>
        {props.step}
      </h6>
    </div>
    </div>)
}