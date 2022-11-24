import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import allCountries from './countries.json'
import {useState} from 'react'

function App() {
  const [countries, setCountries] = useState(allCountries)
  return (
  <div className="App">
    <Navbar/>
    <div className="container">
    <div className="row">
    <CountriesList countries={countries} />
   
      <Routes>
        {/* <Route path="/" element={<CountriesList countries={countries} />}/> */}
        <Route path="/:id" element={ <CountryDetails countries={countries} /> } />		
      </Routes>
     
      </div>
    </div>
  </div>
  )
}

export default App;
