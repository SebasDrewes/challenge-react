import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
    <nav className="navbar">
        <div className="container-fluid nav">
            <Link to="/">
                <h1 id="title">SuperHero App</h1>
            </Link>
            
            </div>
        </nav>
    )
}
export default Nav