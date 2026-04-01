import { useState } from 'react'
import Navbar from './Navbar' ;
import Home from './Home';
import Approach from './Approach';
import Testimonial from './Testimonial';
import About from './About';
import Final from './Final';
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
      <Final/>
      <Footer/>
    </>
  )
}

export default App
