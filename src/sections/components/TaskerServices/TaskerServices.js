import { ServiceCard } from "./OurServices";

export function Services({ services }) {
  return (<section className="service_section layout_padding-bottom">
    <div className="container">
      <div className="custom_heading-container">
        <h3 className=" ">
          OUR TASKER'S SERVICES
        </h3>
      </div>
      <p className="">
        Select from a list of popular tasks and submit your request.
      </p>
      <div className="service_container ">
        <div className="row">
          {services.map(service => {
            return <ServiceCard
              img={service.img}
              service={service.service}
              description={service.description}
            />
          })}
        </div>
      </div>
    </div>
  </section>)
}