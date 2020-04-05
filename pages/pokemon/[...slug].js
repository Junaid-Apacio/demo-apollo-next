import {useRouter} from 'next/router'
import {useQuery} from '@apollo/react-hooks'
import GET_POKEMON_BY_NAME from '../../queries/pokemonByName'
import PokemonDetailPage from '../../components/Layout/PokemonDetailPage/PokemonDetailPage'

const ContentPokemon = (props) => {
  const router = useRouter()
    const slug = router.query.slug.join('') || ''
    const {data, loading, error} = useQuery(GET_POKEMON_BY_NAME, {
      variables: {name: slug}
    })
   if(loading){
     return <p>loading ....</p>
   }

   if(error){
     return <p>Error : {JSON.stringify(error)}</p>
   }

   console.log(data)
  return (
    <div className='section'>
      <PokemonDetailPage pokemon={data}/>
    </div>
  )
}


export default ContentPokemon
