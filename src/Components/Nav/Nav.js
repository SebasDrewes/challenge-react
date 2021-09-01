import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const signOut = () => {
        localStorage.removeItem('token');
    }
    return (
    <nav className="navbar">
        <div className="container-fluid nav">
            <Link to="/challenge-react">
                <h1 id="title">SuperHero App</h1>
            </Link>
            <Link to="/login">
            <button className="btn btn-dark salir" onClick={() => signOut()}>Cerrar sesión</button>
            </Link>
            </div>
        </nav>
    )
}
export default Nav