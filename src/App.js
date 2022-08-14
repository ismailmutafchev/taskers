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
import { useLocalStorage } from "./hooks/useLocalStorage"

import { AuthContext, PostServiceContext } from "./context/authContext";
import { Logout } from "./sections/components/Logout/Logout";
import { MyPosts } from "./sections/components/MyPosts/MyPosts";




export function App() {

  
  const [services, setService] = useState([])
  let responseService = getData('services')
  useEffect(() => {
    responseService.then(res => setService(Object.values(res)));
  },[])
  
  
  const [posts, setPost] = useState([])
  
  const [myPosts, setMyPost] = useState([])

  let responsePost = getData('posts')

  useEffect(() => {
    responsePost.then(res => setPost(Object.values(res)));
  },[])

  const [auth, setAuth] = useLocalStorage('auth', {})

  const userLogin = (authData) => {
    console.log(posts.filter(x => x._ownerId = auth._id));
    setAuth(authData)
  }
  const userRegister = (authData) => {
    setAuth(authData)
  }
  const userLogout = () => {
    setAuth({})
    setMyPost([])
  }

  const createPostService = (newPost) => {
    setMyPost(posts => [
      ...posts,
      {
        ...newPost
      } 
    ]) 
      setPost(posts => [
        ...posts,
        {
          ...newPost
        } 
      ])
    }

  return (
    <AuthContext.Provider value={{
       user: auth, userLogin , userLogout, userRegister
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
        <Route path='/post' element={<PostService createPostService={createPostService}/>} />
        <Route path='/my-posts' element={<MyPosts myPost = {myPosts}/>}/>
        <Route path='/logout' element={<Logout/>} />
      </Routes>
      <Footer />
    </div>
    </AuthContext.Provider>
  )
}
export default App;
