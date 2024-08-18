import { useState } from 'react'
import './App.css';
import Header from '../header/Header.jsx';
import Gallery from "../gallery/Gallery";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Header></Header>
        <Gallery/>
    </div>
  )
}

export default App
