import React from 'react';

const Country = ({country}) =>{
const languages = Object.values(country.languages)
return (
<div>
<h2>{country.name.common}</h2>
<p>Capital: {country.capital}</p>
<p>Area: {country.area}</p>
<h3>Languages</h3>

<ul>
        {languages.map(langanguage =>
          <li key={langanguage}>{langanguage}</li>
        )}
      </ul>

<img src = {country.flags.png} width = '150'/>
</div>
)
}
export default Country;