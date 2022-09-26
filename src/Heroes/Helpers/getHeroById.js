import { heroes } from "../Data/heroes"

export const getHeroById = (id) => {
    return heroes.find( hero => hero.id === id)
}
