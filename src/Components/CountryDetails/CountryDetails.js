import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CountryDetails.css'

const CountryDetails = () => {
    const country = useLoaderData()[0];
    const { name, flags, capital, region, population, continents } = country;
    console.log(country);
    return (
        <div className='country-details'>
            <img src={flags.png} alt="" srcset="" />
            <div>
                <h2>Name: {name.common}</h2>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
                <p>Continents: {continents}</p>
            </div>
        </div>
    );
};

export default CountryDetails;