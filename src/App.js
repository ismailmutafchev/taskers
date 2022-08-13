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
import { getData, createPost } from "./Services/useData";
import { useEffect, useState } from "react";

import { AuthContext } from "./context/authContext";
import { Logout } from "./sections/components/Logout/Logout";




export function App() {

  
  const [services, setService] = useState([])
  let responseService = getData('services')
  useEffect(() => {
    responseService.then(res => setService(Object.values(res)));
  },[])
  

  const [posts, setPost] = useState([])
  let responsePost = getData('posts')
  useEffect(() => {
    responsePost.then(res => setPost(Object.values(res)));
  },[])

  const [auth, setAuth] = useState({})
  const userLogin = (authData) => {
    setAuth(authData)
  }
  const userRegister = (authData) => {
    setAuth(authData)
  }
  const userLogout = () => {
    setAuth({})
  }

  const updatePosts = (newPost) => {  
    setPost(posts => [
      ...posts, 
      {
        // ...newPost
      }
    ])
  }
  
  return (
    <AuthContext.Provider value={{
       user: auth, userLogin , userLogout, userRegister,
       post: posts, createPost,
     }}>

    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Slide posts = {posts}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/services' element={<Services services={services}/>} />
        <Route path='/post' element={<PostService updatePosts = {updatePosts}/>} />
        <Route path='/logout' element={<Logout/>} />
      </Routes>
      <Footer />
    </div>
    </AuthContext.Provider>
  )
}
export default App;
