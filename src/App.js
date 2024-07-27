
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="scrollbar w-screen h-screen overflow-x-hidden bg-richblack-900 scrollbar-thumb-cyan-400 scrollbar-track-richblue-900 scrollbar-thumb-rounded">
      <Navbar/>

      <div>
      <Home/> <hr className='border-cyan-400  w-[94%] mx-auto '/>
      <About/> <hr className='border-cyan-400  w-[94%] mx-auto '/>
      <Skills/> <hr className='border-cyan-400  w-[94%] mx-auto '/>
      <Experience/> <hr className='border-cyan-400  w-[94%] mx-auto '/>
      <Projects/> <hr className='border-cyan-400  w-[94%] mx-auto '/>
      <Achievements/>
</div>

      <Footer/>
    </div>
  );
}


export default App;
