import './Header.css';
import logo from '../../Assets/Logonetflix.png'
import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import avatar from '../../Assets/avatar.jpg';

export const Header = () => {
    return(
        <nav className="header">
            <Link to= '/'><img src={logo} alt="netflix logo" className='netflixlogo'/> </Link>
            
            <img src={avatar} alt="Netflix Logo" className="avatar" />

        </nav>
    )
}