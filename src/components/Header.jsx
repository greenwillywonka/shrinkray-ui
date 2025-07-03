import { Link } from 'react-router';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className= {styles.header}>
            <h1>Shrink Ray</h1>
            <h2>PEW PEW!</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/links">Links</Link></li>
                    <li><Link to="/addLink">Add a Link</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;