import React from 'react';
import './Countries.css';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';


const Countries = () => {

    const countries = useLoaderData();

    return (
        <div>
            <h2>All the countries of the world!</h2>
            <div className="countries">
                {
                    countries.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;