import { HeroList } from '../Components/HeroList'

export const DcPages = () => {
  return (
    <div className='mt-2'>
      <h1> DC Comics </h1>
      <hr />

      <HeroList publisher='DC Comics' />
    </div>
  )
}
