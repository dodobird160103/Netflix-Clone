import './Header.css';
import logo from '../../Assets/Logonetflix.png'
import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

export const Header = () => {
    return(
        <nav className="header">
            <Link to= '/'><img src={logo} alt="netflix logo" /> </Link>
            
            <div className="list">
                <Link to='/TvShows'>Tv Shows</Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/recently_added'>Recently Added</Link>
                <Link to='/list'>List</Link>
            </div>

            <div className='icon'>
                <BsSearch />
            </div>
        </nav>
    )
}