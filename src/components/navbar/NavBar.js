/*####################################
              Imports
#####################################*/
//Modules
//Styles
import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'

//Components
//Core

/*####################################
              Logic
#####################################*/
const NavBar = () => {
    return(
        <header className='navbar'>
            <a>Marvel</a>
            <a>DC</a>
            <a>Image Comics</a>
            <a>Other Comics</a>
            <CartWidget qty = "1"/>
        </header>
    )
}

/*####################################
              Exports
#####################################*/

export default NavBar