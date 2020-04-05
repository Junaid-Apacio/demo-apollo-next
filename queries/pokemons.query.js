import gql from 'graphql-tag'

const POKEMONS_QUERY = gql`
  query getPokemons {
 pokemons(first: 12){
  id
  name
  image
}
}
`

export default POKEMONS_QUERY
