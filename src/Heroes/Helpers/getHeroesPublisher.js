import {heroes} from '../Data/heroes';

export const getHeroesPublisher = ( publisher ) => {
    //Guardo en una variable los publisher que necesito.
    const validPublisher = ['DC Comics' , 'Marvel Comics'];
    //Si el publisher que busco no esta , larga un error.
    if(!validPublisher.includes (publisher)){           
        throw new Error(`${publisher} no existe`)
    }
    //Sino returname el publisher que necesito de Heroes , filtrando el que sea igual
    return heroes.filter(heroe => heroe.publisher === publisher);
}