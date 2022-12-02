import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Shared/Navbar/Navbar';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='max-w-[1280px] mx-auto '>
       {/* <Navbar/> */}
       <Routes>
          <Route path='/' element={ <Home />}/>

       </Routes>
          
    </div>
  );
}

export default App;
