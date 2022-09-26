import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'  //se instalo 
import { useForm } from "../../HooksGlobas/useForm"
import { getHeroByName } from "../Helpers/getHeroByName";
import { HeroCard } from "../Components/HeroCard";


export const Search = () => {

  //Armo la ruta de mi navegacion
  const navigate = useNavigate();
  //Obtengo info de la ubicacion donde estoy
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: ''
  })


  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;

    //Armo mi ruta de navegacion
    navigate(`?q=${searchText}`)

  }

  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Search'
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange} />

            <button
              className="btn btn-outline-primary mt-1"
            >Search</button>


          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q === '')
            ? <div className="alert alert-primary">Search hero</div>
            : (heroes.length === 0) && <div className="alert alert-danger">There's no results with <b> {q} </b></div>
          }

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </div>
  )
}
