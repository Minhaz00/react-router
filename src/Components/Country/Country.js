import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
    const { name, flags } = country;
    return (
        <div className='country'>
            <Link to={`/countries/${name.common}`}>
                <img src={flags.png} alt="" srcset="" />
                <h4>{name.common}</h4>
            </Link>
        </div>
    );
};

export default Country;