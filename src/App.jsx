import { BrowserRouter } from "react-router";
import Home from './Screens/Home'
import Router from "./Screens/Router";
import Navbar from "./Components/Navbar";


function App() {


  return (
    <>
    
      <BrowserRouter>
        <Navbar/>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
