import { BrowserRouter } from "react-router";
import Router from "./Screens/Router";
import Navbar from "./Components/Navbar";


function App() {


  return (
    <>
    <div className="bg-[#F3F2F2]">
    <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
