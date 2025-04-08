import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/ui/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Support from './components/services/support/Support';
import Security from './components/services/security/Security';
import Digital from './components/services/digital/Digital'; 
import Telefonia from './components/services/telefonia/Telefonia';
import Equipment from './components/services/equipment/Equipment';
import Networks from './components/services/networks/Networks';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Footer from './components/ui/footer/Footer';
import OurWork from './components/ourWork/OurWork';
import ECommers from './components/e-commers/E-commers';
import Administrator from './components/administrator/Administrator';
import AdminPanel from './components/adminPanel/AdminPanel';
import { HelmetProvider } from 'react-helmet-async';

import './App.css';

const App = () => {

  return (

<HelmetProvider>
<Router>
      <div className="app-container">
      <Header />
      <Administrator/>

      <div className="main-content">
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/networks" element={<Networks/>} />
            <Route path="/services/support" element={<Support />} />
            <Route path="/services/security" element={<Security />} />
            <Route path="/services/digital" element={<Digital />} /> *
            <Route path="/services/telefonia" element={<Telefonia />} />
            <Route path="/services/equipment" element={<Equipment />} />
            <Route path="/ourWork" element={<OurWork/>} />
            <Route path="/ecommers" element={<ECommers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/adminPanel' element={<AdminPanel/>}/>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
      </div>
          <Footer />
      </div> 
    </Router>
</HelmetProvider>
  );
};

export default App;
