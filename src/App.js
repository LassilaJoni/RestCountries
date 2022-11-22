import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Weather from './components/Weather';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = event => void setFilter(event.target.value); 

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
      setCountries(response.data);
    })
  }, [setCountries])

  const filterCountries = (filter, countries) =>
    countries.filter(country => 
      country.name.common.toLowerCase().includes(filter.toLowerCase()));

  return(
    <div>
      <Filter 
      filter={filter}
      handleFilterChange = {handleFilterChange}></Filter>

      <Countries countries={filterCountries(filter, countries)} show={setFilter}></Countries>
      {filterCountries(filter, countries).length === 1 && <Weather country={filterCountries(filter, countries)[0]}></Weather>}
    </div>
  )
}

export default App