import gql from 'graphql-tag'

const GET_POKEMON_BY_NAME = gql`
query getPokemonByName($name: String!) {
	pokemon(name:$name){
    id
    name
    image
    attacks{
      special{
        name
        type
        damage
      }
    }
    maxCP
    maxHP
  }
}
`
export default GET_POKEMON_BY_NAME
