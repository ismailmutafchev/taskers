import { About } from "./components/About";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Slide } from "./components/HeroSlide";


export function Bg() {
  return (
    <div>
      <Slide />
      <About />
      <HowItWorks />
      <Login />
      <Register />
      <Contact />
      <Services/>
    </div> )
}