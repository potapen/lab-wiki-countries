import Country from './Country'
import './Country.css'

const CountriesList = ({countries}) => {
    const style={
        maxHeight: '90vh',
        overflow: 'scroll'
    }

    return(
        <div className="col-5" style={style}>
        <div className="list-group">
            {countries.map(country => <Country key={country.alpha3Code} {...country} />)}
            
        </div>
      </div>
    )
}

export default CountriesList