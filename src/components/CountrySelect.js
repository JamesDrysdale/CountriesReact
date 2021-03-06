import React from 'react';

const CountrySelect = (props) => {

    const options = props.countries.map(country => {
    return <option value={country.alpha3Code} key={country.alpha3Code}>{country.name}</option>
    });

    function handleChange(event){
        props.onCountrySelected(event.target.value);
    }

  return (
    <select id="country-select" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a country...</option>
      {options}
    </select>
  )
}

export default CountrySelect;