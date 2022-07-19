import { HowItWorksCard } from "./blocks/HowItWorksCard";

export function HowItWorks() {
    return(<section className="work_section layout_padding">
    <div className="container">
      <div className="custom_heading-container">
        <h3 className=" ">
          HOW IT WORKS
        </h3>
      </div>
    </div>
    <div className="work_container ">
      <HowItWorksCard
      className = 'box b-1'
      img = './images/pngwing.com (6).png'
      step = 'Open our App'
      />
      <HowItWorksCard
      className = 'box b-2'
      img = './images/pngwing.com (3).png'
      step = 'Conenct with people you need'
      />
      <HowItWorksCard
      className = 'box b-3'
      img = './images/pngwing.com (4).png'
      step = 'Find Best Prices and Book '
      />
      <HowItWorksCard
      className = 'box b-4'
      img = './images/pngwing.com (5).png'
      step = 'Sit back and relax'
      />
    </div>
  </section>)
}