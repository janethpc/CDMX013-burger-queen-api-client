import {  Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Burger Queen BJPC</a>
                    <Link to={'/'}><button className="btn btn-outline-success" type="submit">Cerrar Sesion</button></Link>
                </div>
            </nav>
        </>
    )
}
