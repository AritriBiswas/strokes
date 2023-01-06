
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./page/LandingPage/LandingPage"
import TeamsPage from './page/TeamsPage/TeamsPage';
import RGallery from './page/Gallery/RGallery';
import EventsPage from './page/EventsPage/EventsPage';
import AlumniPage from "./page/AlumniPage/AlumniPage";
import Photography from "./page/Photography/Photography";





function App() {

  
  return (
    <section>
    
      <BrowserRouter>
      
      
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/OurTeam" element={<TeamsPage/>} />
          <Route path="/Gallery" element={<RGallery/>} />
          <Route path="/OurEvents" element={<EventsPage/>} />
          <Route path="/OurAlumni" element={<AlumniPage/>} />
          <Route path="/Photography" element={<Photography/>} />
        </Routes>

      </BrowserRouter>
    
    </section>
  );
}

export default App;
