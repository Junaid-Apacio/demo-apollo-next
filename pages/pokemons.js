import { useQuery } from '@apollo/react-hooks'
import POKEMONS_QUERY from '../queries/pokemons.query'
import Head from 'next/head'
import PokemonCard from '../components/Layout/PokemonCard/PokemonCard'

const pokemons = () => {
  const { data, loading, error } = useQuery(POKEMONS_QUERY)
  if (loading) {
    return <p>Loading ...</p>
  }

  if (error) {
    return <p>Error : {JSON.stringify(error)}</p>
  }

  return (
    <div className='section'>
      <Head>
        <title>Pokemons</title>
      </Head>
      Pokemons are soon arriving here : 😻
      <div className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            {
              data.pokemons.map(pokemon => {
                return (
                  <div className='column is-full-mobile is-half-tablet is-one-quarter-fullhd' key={pokemon.id}>
                    <PokemonCard pokemon={pokemon} />
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default pokemons
