
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./page/LandingPage/LandingPage"
import TeamsPage from './page/TeamsPage/TeamsPage';
import RGallery from './page/Gallery/RGallery';
import EventsPage from './page/EventsPage/EventsPage';





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
    <div className='main_container'>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/OurTeam" element={<TeamsPage/>} />
          <Route path="/Gallery" element={<RGallery/>} />
          <Route path="/OurEvents" element={<EventsPage/>} />


          
        </Routes>

      </BrowserRouter>
    </div>
    </section>
  );
}

export default App;
