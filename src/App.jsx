import { useState } from 'react'
import Navbar from './Navbar' ;
import Home from './Home';
import Approach from './Approach';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Approach/>
    </>
  )
}

export default App
