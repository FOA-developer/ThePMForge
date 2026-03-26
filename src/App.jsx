import { useState } from 'react'
import Navbar from './Navbar' ;
import Home from './Home';
import Approach from './Approach';
import Testimonial from './Testimonial';
import About from './About';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Approach/>
      <Testimonial/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
