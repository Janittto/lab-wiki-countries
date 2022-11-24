import { useParams } from "react-router-dom"

const CountryDetails = ({countries}) => {
	const params = useParams()
	const id = params.id
    console.log(countries)
    const findCountry = countries.find((element) => element.alpha3Code === id)
	return (
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${(findCountry.alpha2Code).toLowerCase()}.png`}/>
            <h1>{findCountry.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{findCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {findCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>

                  {(findCountry.borders).map((element => <li key={findCountry.borders.indexOf(element)}>{element}</li>))}
                  </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
	)
}

export default CountryDetails
