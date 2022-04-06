import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to='/'>Produtos</NavLink>
      <NavLink to='contato'>Contato</NavLink>
    </nav>
  )
}

export default Header
