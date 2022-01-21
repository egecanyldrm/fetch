import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {

  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   fetch('https://restcountries.com/v2/all')
  //     .then((response) => response.json())
  //     .then((response) => { setCountries(response) })
  // }, [])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then((response) => { setCountries(response.data) })
      .catch((error) => { console.log(error); })
  }, [])



  return (
    <div className="container d-flex justify-content-center flex-wrap mt-5">
      {countries.map((country) => {
        return (
          <div className='card col-2 m-2' key={country.name} >

            <img className='card-img-top' src={country.flag} alt={country.name} style={{ height: 'auto' }} />
            <div className="card-body">
              <h5 className='card-title' >{country.name}</h5>
              <p className='card-text' >{country.capital}</p>
            </div>

          </div>
        )
      })}

    </div>
  );
}

export default App;
