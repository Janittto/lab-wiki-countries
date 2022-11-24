import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const CountriesList = () => {
	const [countries, setCountries] = useState(null)

	useEffect(() => {
        // async function getCountries() {
        //     	const response = await axios.get(
        //         "https://ih-countries-api.herokuapp.com/countries"            	)
        //     	setCountries(response.data)
        //         console.log(response.data)
        //     }
            
        //     getCountries()
		axios
			.get("https://ih-countries-api.herokuapp.com/countries")
			.then(({  data  }) => {
                setCountries(data)
			
			})
			.catch((err) => {
				console.error(err)
			})
	}, [])
    if (!countries) {
		return <div className="loading">Loading....</div>
	}

        return (
            <div className="col-5">
                {countries.map((element) => {
                   return ( 
                    <div className="list-group" key={element.alpha3Code}>
                        <Link className="list-group-item list-group-item-action" to={element.alpha3Code}>
                        {<img src={`https://flagpedia.net/data/flags/icon/72x54/${(element.alpha2Code).toLowerCase()}.png`}/>} {element.alpha3Code} {element.name.official}
                        </Link>
                    </div>
                     )
                })}
            </div>
        )
}


export default CountriesList