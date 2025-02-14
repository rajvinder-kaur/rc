import { BrowserRouter } from "react-router";
import Router from "./Screens/Router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {


  return (
    <>
    <div className="bg-[#F3F2F2]">
    <BrowserRouter>
        <Navbar />
        <Router />
        <Footer/>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
