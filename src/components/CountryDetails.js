// import {Route, Routes} from 'react-router-dom'
import {useParams } from 'react-router-dom';

const CountryDetails = ({countries}) => {
    const style ={
        width: '30%',
    }
    let { alpha3Code } = useParams()
    const country = countries.find(c => (c.alpha3Code === alpha3Code))

    console.log('country:', country.borders)
    console.log('------------------------')
    
    return(
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
    )
}
export default CountryDetails