import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import '../shared/custom.css';
import Loading from '../shared/Loading';


const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }



    return (
        <nav className="navbar navbar-expand-lg navbar-dark  primary-color ">
            <div className="container">

                <Link to='/' className="navbar-brand fs-2">Metal Parts World</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">HOME</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <p>{user?.displayName}</p>
                        </li>
                        <li className="nav-item">
                            {
                                user ? <Link onClick={handleSignOut} className="nav-link" to="/login">LOG OUT</Link>
                                    :
                                    <Link className="nav-link" to="/login">LOGIN</Link>
                            }


                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;