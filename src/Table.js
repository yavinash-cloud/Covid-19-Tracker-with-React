import React from 'react'
import './Table.css'
import numeral from 'numeral'
function Table({countries}) {
    return (
        <div className="table">
            
        {countries.map(({country,cases})=>(
          <ul key={country}>
              <li>{country}</li>
              <li><strong>{numeral(cases).format()}</strong></li>
          </ul>  
        ))}
        
        </div>
    )
}

export default Table
