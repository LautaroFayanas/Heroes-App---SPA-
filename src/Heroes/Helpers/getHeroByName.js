import { heroes } from "../Data/heroes";

//Si no recibo el name por parametros que sea un string vacio
export const getHeroByName = (name = '' ) => {

    name.toLocaleLowerCase().trim()

    //Si es igual a 0 , quiere decir que la persona no busco nada.
    if(name.length === 0) return [];

   return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}
