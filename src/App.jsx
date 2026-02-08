import { HashRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ThankYou, WhatsApp } from "./components";

const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <Routes>
          <Route path="/" element={
            <>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
              <WhatsApp />
            </>
          } />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
