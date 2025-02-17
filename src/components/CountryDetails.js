import {useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'

const CountryDetails = ({countries}) => {
    let { alpha3Code } = useParams()
    const [country, setCountry] = useState('empty')
    useEffect(() =>
    {
        const getCountry = async () => {
           const {data} = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
           console.log('data:', data)
           setCountry(data)
       }

       getCountry()
        
    }, [alpha3Code])
    
    const style ={
        width: '30%',
    }

    console.log('-----------------------------------------')
    console.log(country)
    return(
        ((country!=='empty') && (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={style}>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {country.borders.map(alpha3Code => {
                            const country = countries.find(c => (c.alpha3Code === alpha3Code))
                            return <li key={alpha3Code}><a href={`/${alpha3Code}`}>{country.name.common}</a></li>
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
        ))
    )
}
export default CountryDetails