import React from 'react';

const CountryDetail = ({country}) => {

    if (!country) return null;

  return (
    <div>
        <img src={country.flag} width="200"></img>
        <h3>{country.name}</h3>
        <p><strong>Capital:</strong> {country.capital}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Area:</strong> {country.area}</p>        
    </div>
  )
}

export default CountryDetail;