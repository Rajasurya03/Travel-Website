import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
      </Router>
      {/* <h1>Hi this Is RAJ</h1> */}
    </>
  );
}

export default App;
