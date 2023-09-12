import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useLocation, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Pups from './components/Pups'
import Pup from './components/Pup'
//import AddPupForm from './components/AddPupForm'
import Nav from './components/Nav'
import './index.css'

function App() {
  const [pups, setPups] = useState([]);
  const location = useLocation();
  const {pathname} = location;
  
  useEffect(() => {
    const fetchPups = async() => {
      const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players');
      const data = response.data.data.players;
      //console.log(data)
      setPups(data);
    };
    fetchPups();
  }, []);

  return (
    <div>
      <h1>Puppy Bowl</h1>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/pups' element={<Pups pups = {pups}/>} />
        <Route path='/pups/:id' element={<Pup pups={pups}/>} />
      </Routes>
    </div>
  )
}

export default App
