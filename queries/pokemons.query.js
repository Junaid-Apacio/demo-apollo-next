import gql from 'graphql-tag'

const POKEMONS_QUERY = gql`
  query getPokemons {
 pokemons(first: 12){
  id
  name
  image
  maxCP
  maxHP
  attacks{
    special{
      name
      type
      damage
    }
  }
}
}
`

export default POKEMONS_QUERY
