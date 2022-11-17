import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-[1280px]'>
           <Navbar/>
           <Home />
    </div>
  );
}

export default App;
