import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/ui/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Support from './components/services/support/Support';
import Security from './components/services/security/Security';
import Digital from './components/services/digital/Digital'; 
import Servers from './components/services/servers/Servers';
import Networks from './components/services/networks/Networks';
import Printer from './components/services/printer/Printer';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Footer from './components/ui/footer/Footer';
import OurWork from './components/ourWork/OurWork';
import ECommers from './components/e-commers/E-commers';
import Administrator from './components/administrator/Administrator';
import CallToAction from './components/calltoaction/CallToAction';
import AdminPanel from './components/adminPanel/AdminPanel';
import { HelmetProvider } from 'react-helmet-async';

import './App.css';
import ScrollToTop from './components/ui/ux/scrollToTop/SccrollTop';
import Leasing from './components/services/leasing/Leasing';

const App = () => {

  return (

<HelmetProvider>
<Router>
  <ScrollToTop/>
      <div className="app-container">
      <Header />
      

      <div className="main-content">
        <Routes>

            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/networks" element={<Networks/>} />
            <Route path="/services/support" element={<Support />} />
            <Route path="/services/security" element={<Security />} />
            <Route path="/services/digital" element={<Digital />} /> *
            <Route path="/services/servers" element={<Servers/>} />
            <Route path="/services/leasing" element={<Leasing />} />
            <Route path="/services/printer" element={<Printer/>}/>
           {/*  <Route path="/ourWork" element={<OurWork/>} /> */}
 {/*            <Route path="/ecommers" element={<ECommers />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path='/adminPanel' element={<AdminPanel/>}/>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
      </div>
         {/*  <CallToAction/> */}
          <Footer />
      </div> 
    </Router>
</HelmetProvider>
  );
};

export default App;
