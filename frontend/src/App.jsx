import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Hospitals from "./pages/Hospitals";
import Doctors from "./pages/Doctors";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import MedicalDisclaimer from "./pages/MedicalDisclaimer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DoctorProfile from "./pages/DoctorProfile";

import "./styles/global.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/hospitals" element={<Hospitals />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/doctors/:id" element={<DoctorProfile />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />

                <Route path="/privacy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<Terms />} />
<Route path="/medical-disclaimer" element={<MedicalDisclaimer />} /> 
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;