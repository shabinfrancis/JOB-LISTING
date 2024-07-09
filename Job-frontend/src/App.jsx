// import { BrowserRouter, RouterProvider, Routes, Route, Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './App.css'
// import Home from './pages/Home'
// import About from './pages/About'
import Navbar from './pages/components/Navbar'
// import CreateJob from './pages/CreateJob'
// import MyJobs from './pages/MyJobs'
// import UpdateJob from './pages/UpdateJob'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/post-jobs' element={<CreateJob />}/>
          <Route path='my-jobs' element={<MyJobs />} />
          <Route path='edit-job/:id' element={<UpdateJob />} loader={({params}) => fetch(`http://localhost:8080/all-jobs/${params._id}`)} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
