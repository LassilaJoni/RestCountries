import React from 'react';
import Country from './Country';

const Countries = ({countries, show}) => {

    if (countries.length > 10) {
        return(
            <p>Too many matches, specify filter.</p>
        );
    }

    else if (countries.length === 0) {
        return(
            <p>No countries found with filter.</p>
        );
    }

    else if (countries.length <= 10 && countries.length > 1) {
        return(
            <>
            <table>
                <tbody>
                    {countries.map((country) =>
                    <tr key={country.name.common}>
                        {country.name.common}
                        <button onClick={() => show(country.name.common)}>show</button>
                    </tr>
                    )}
                </tbody>
            </table>
            </>
        );
    }

    else if (countries.length === 1) {
        return(
            <>
            <Country country = {countries[0]}/>
            </>
        );
    }
}

export default Countries;