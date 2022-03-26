import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/class/demoniste">Class Demoniste</Link>
        </nav>
    )
}
export default Header;