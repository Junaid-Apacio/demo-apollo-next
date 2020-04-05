import Link from 'next/link'

const PokemonCard = ({ pokemon = {} }) => {
  const { id, name, image } = pokemon
  return (
    <div className='card has-background-success box'>
      <div className='card-image'>
        <figure className='image is-1by1'>
          <img src={image} alt='Pokemon' />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-left'>
            <figure className='image is-96x96'>
              <img src={image} alt='Placeholder image' className='is-rounded box' />
            </figure>
          </div>
          <div className='media-content'>
            <p className='title is-4'>{name}</p>
            <p className='subtitle is-6'>@{name}</p>
          </div>
        </div>
        <div className='content'>
          <Link href='/pokemon/[slug]' as={`pokemon/${name}`}>
            <a>Learn More</a>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default PokemonCard
