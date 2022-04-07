// src/App.js
import "./App.css";
import Nabbar from './components/Navbar'
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
// import countries from './countries.json'
import {Route, Routes} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from "react"

function App() {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    
    const getCountries = async()=>{
      const {data} = await axios.get('https://ih-countries-api.herokuapp.com/countries')
      console.log('data:', data)
      setCountries(data)
    }
    getCountries()
  },[])
  return (
  <div className="App">

    <Nabbar/>
    <div className="container">
      <div className="row">
        <CountriesList countries={countries} />
        {/* React-Router Route rendering the CountryDetails should go here */}
        <Routes>
          <Route path="/" element={<div className="col-7">please select a country</div> } />
          <Route path="/:alpha3Code" element={<CountryDetails countries={countries}/> } />
        </Routes>
      </div>
    </div>
  </div>
  )
}
export default App;