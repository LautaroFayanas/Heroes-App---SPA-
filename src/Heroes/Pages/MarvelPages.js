import { HeroList } from "../Components/HeroList"

export const MarvelPages = () => {
  return (
    <div className='mt-2'>
      <h1> MarvelPage </h1>
      <hr />

      <HeroList publisher='Marvel Comics' />
    </div>
  )
}
