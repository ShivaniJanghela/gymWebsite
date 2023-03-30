import './App.css';
import Join from './Components/Join/Join';
import Hero from "./Components/Hero/Hero.jsx"
import { Plans } from './Components/Plans/Plans';
import Programs from "./Components/Programs/Programs.jsx"
import Reasons from './Components/Reasons/Reasons.jsx';
import { Testimonials } from './Components/Testimonials/Testimonials.jsx';
import Footer from './Components/Footer/Footer';
import Calcultor from './Components/Calculator/Calcultor';

function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Calcultor/>
         <Testimonials/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
