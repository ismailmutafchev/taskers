import { ServiceCard } from "./OurServices";

export function Services() {
    return(    <section className="service_section layout_padding-bottom">
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
         <ServiceCard
         img = 'images/—Pngtree—water pipe repair workers_3061495.png'
         name = 'Tab Services'
         description = 'Bathtub Plumbing Services. Bathtub Repairs and Installations from Experienced Plumbers.'
         />
         <ServiceCard
         img = 'images/kisspng-cast-iron-pipe-leak-plumbing-plumber-plumbing-pipes-5b3295f13ae921.6672058415300418412413.png'
         name = 'Plumbing'
         description = 'Design, installation, construction, replacement, service, repair, alteration, or modification of the pipes.'
         />
         <ServiceCard
         img = 'images/pngwing.com (1).png'
         name = 'Cleaning'
         description = 'Dusting, sweeping, mopping, and washing floors, toilets, showers, tubs, driveways, windows, and counters. '
         />
         <ServiceCard
         img = 'images/pngwing.com (2).png'
         name = 'Carpentery'
         description = 'Carpenter will build, erect, install, and repair forms, structures, and other fixtures made from wood and other materials as needed to assist with various types of construction projects.'
         />
        </div>
      </div>
    </div>
  </section>)
}