
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./page/LandingPage/LandingPage"
import TeamsPage from './page/TeamsPage/TeamsPage';
import RGallery from './page/Gallery/RGallery';
import EventsPage from './page/EventsPage/EventsPage';
import AlumniPage from "./page/AlumniPage/AlumniPage";





function App() {

  
  return (
    <section
            // style={{
            //   background: "url('../public/main_bg.jpeg')",
            //   height: "100vh",
            //   width: "auto",
            //   backgroundRepeat: "no-repeat",
            //   padding: "none",
            //   color: "aliceblue"
            // }}
        >
    
      <BrowserRouter>
      
      
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
        

          {/* <div className='main_container'>
        <Navbar/>
        </div> */}

         <Routes>

          <Route path="/OurTeam" element={<TeamsPage/>} />
          <Route path="/Gallery" element={<RGallery/>} />
          <Route path="/OurEvents" element={<EventsPage/>} />
          <Route path="/OurAlumni" element={<AlumniPage/>} />


          
        </Routes>

      </BrowserRouter>
    
    </section>
  );
}

export default App;
