
import "./App.css";
import Header from "./layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./layout/Footer";
import Member from "./pages/Member";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/member" element={<Member />} />
          <Route path="contactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
