import { Link } from 'react-router';
import { useAuth } from '../AuthContext';

import styles from './Header.module.css';

const Header = () => {
    const { isAuth } = useAuth();

    return (
        <header className= {styles.header}>
            <h1>Shrink Ray</h1>
            <h2>PEW PEW!</h2>
            <nav>
                <ul>
                    {isAuth ? (
                    <>
                    <li><Link to="/links">Links</Link></li>
                    <li><Link to="/addLink">Add a Link</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>

                    {/* <li><Link to="/newUser">Create a new User</Link></li> */}
                    </>
                    ) : (
                    <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    </>
                    )}
                </ul>
            </nav>
        </header>
    )
};

export default Header;