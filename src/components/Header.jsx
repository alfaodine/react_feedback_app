import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Header({text, bgColor, color}) {
    const headerStyles = {
        background: bgColor, 
        color: color
    }

  return (
    <header style = {headerStyles}>
      <Link to ='/'>
        <h2>{text}</h2>
        </Link>
    </header>
  )
}

Header.defaultProps = {
text: 'Feedback UI',
bgColor: 'rgba(0,0,0,0.4)',
color: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header