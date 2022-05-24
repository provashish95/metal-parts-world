import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import '../shared/custom.css';



const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark  primary-color ">
            <div className="container">

                <Link to='/' className="navbar-brand fs-2">Metal Parts World</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myPortfolio">My Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            {
                                user ? <Link className="nav-link" to="/dashboard"  >Dashboard</Link> : " "
                            }

                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        {
                            user && <p className=" text-white secondary-color border-2 rounded-3 py-1 px-2 me-2" to="#">{user?.displayName}</p>
                        }
                        <li className="nav-item">
                            {
                                user ? <Link onClick={handleSignOut} className="nav-link" to="/login">Log out</Link>
                                    :
                                    <Link className="nav-link" to="/login">Log in </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;