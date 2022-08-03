import { About } from "./sections/components/About/About";
import { Nav } from "./sections/components/Common/Nav";
import { HowItWorks } from './sections/components/HowItWorks/HowItWorks'
import { Login } from "./sections/components/Login/Login"
import { Register } from "./sections/components/Register/Register"
import { Contact } from "./sections/components/Contact/Contact"
import { Services } from "./sections/components/TaskerServices/TaskerServices"
import { Footer } from "./sections/components/Common/Footer"
import { Slide } from "./sections/components/Home/HeroSlide"

import { Route, Routes } from 'react-router-dom'
import { PostService } from "./sections/components/PostService/PostService";




export function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
            <Route path='/' element={<Slide />} />
            <Route path='/about' element={<About />} />
            <Route path='/how-it-works' element={<HowItWorks />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/services' element={<Services />} />
            <Route path='/post' element={<PostService/>} />
        </Routes>
      <Footer />
    </div>
  )
}
export default App;
