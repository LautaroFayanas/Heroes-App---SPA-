import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../Helpers/getHeroById";

export const Hero = () => {

  const navigate = useNavigate();

  //Paso por parametros el id de mi hero para trabajarlo en una ruta aparte.
  const { id } = useParams();

  //Creo una funcion que busque (find) el id que sea igual a mi hero y me traiga la data de ese mismo hero.
  const hero = getHeroById(id);
  console.log(hero);

  //Si el hero no existe , devuelveme a /marvel - Asegurando ruta -
  if (!hero) {
    return <Navigate to='/marvel' />
  }

  const onReturn = () => {
    //El -1 devuelve a la pagina anterior. Otra forma de hacerlo
    navigate(-1)    
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b> {hero.alter_ego}</b></li>
          <li className="list-group-item"><b> {hero.publisher}</b></li>
          <li className="list-group-item"><b> {hero.first_appearance}</b></li>
        </ul>

        <h5 className="mt-3"> Character </h5>
        <p> {hero.characters} </p>

        <button onClick={onReturn} className="btn btn-outline-primary"> back </button>

      </div>
    </div>
  )
}
