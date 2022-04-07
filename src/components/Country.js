import { Link } from "react-router-dom"
const Country = ({alpha3Code,alpha2Code,name, ...countryProps}) => {
    return(
        <Link className="list-group-item list-group-item-action" to={`/${alpha3Code}`}>
            <img className='countryImg' src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt={alpha3Code}/>
            {name.common}
        </Link>
    )
}
export default Country

