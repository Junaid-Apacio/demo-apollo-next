import styled from 'styled-components'
import { useRouter } from 'next/router'

const PokemonDetailPage = ({ pokemon: { pokemon } }) => {
  const router = useRouter()

  console.log('***', pokemon)
  return (
    <StyledPokemonDetail>
      <div className='holder box'>
        <div className='card-image'>
          <figure className='image'>
            <img src={pokemon.image} alt='Placeholder image' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-left'>
              <figure className='image is-48x48'>
                <img src={pokemon.image} alt='Placeholder image' className='is-rounded' />
              </figure>
            </div>
            <div className='media-content'>
              <p className='title is-4 has-text-white'>{pokemon.name}</p>
              <p className='subtitle is-6'>@{pokemon.name}</p>
            </div>
          </div>
          <div className='content'>
            <h5>Attacks</h5>
            <ul>
              {
                pokemon.attacks.special.map(sp => (
                  <li key={sp.name}>{sp.name} </li>
                ))
              }
            </ul>

            <button onClick={() => router.push('/pokemons')}>Back To Pokemons</button>
          </div>
        </div>
      </div>
    </StyledPokemonDetail>

  )
}

const StyledPokemonDetail = styled.div`
.holder{
  display: flex;
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  color: white;
  background: lightseagreen;
  
  .content h5{
    color: white;
    margin-top:2rem;
  }

  .card-content{
    align-self: center;
    margin: 0 auto;
  }
}

`

export default PokemonDetailPage
