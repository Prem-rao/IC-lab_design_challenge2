import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Carousel from "./components/Carousel";
import MyAccordion from "./components/MyAccordion";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Carousel/>}/>
          <Route path="/accordion" element={<MyAccordion/>}/>
          <Route path="/button" element={<Button/>}/>
          <Route path="/card" element={<Card/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
