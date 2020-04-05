import Link from 'next/link'
import { useState } from 'react'
const Navbar = () => {
  // burger menu mobile open & close
  const [isOpenBurger, setBurger] = useState(false)
  return (
    <section className='section'>

      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <i class='fab fa-angrycreative fa-4x has-text-success' />
          </a>
          <a
            role='button' className={`navbar-burger burger ${isOpenBurger ? 'is-active' : ''}`} aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'
            onClick={() => {
              setBurger((PrevisOpenBurger) => !PrevisOpenBurger)
            }}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
        <div id='navbarBasicExample' className={`navbar-menu ${isOpenBurger ? 'is-active' : ''}`}>
          <div className='navbar-start'>
            <Link href='/'>
              <a className='navbar-item'>
                Home
              </a>
            </Link>
            <Link href='/pokemons'>
              <a className='navbar-item'>
                Pokemons
              </a>
            </Link>
            <div className='navbar-item has-dropdown is-hoverable'>
              <Link href='#'>
                <a className='navbar-link' style={{ cursor: 'default' }}>
                  More
                </a>
              </Link>

              <div className='navbar-dropdown'>
                <Link href='/top-pokemon'>
                  <a className='navbar-item'>
                    Top 5 Pokemon
                  </a>
                </Link>
                <Link href='/search'>
                  <a className='navbar-item'>
                    Search a pokemon
                  </a>
                </Link>
                <Link href='/contact'>
                  <a className='navbar-item'>
                    Contact
                  </a>
                </Link>
                <hr className='navbar-divider' />
                <a className='navbar-item'>
                    Report an issue
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>

  )
}

export default Navbar
