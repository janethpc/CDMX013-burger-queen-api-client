import {  Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <nav id='nav' className="navbar">
                <div className="container-fluid">
                    <a id='bq' className="navbar-brand">Burger Queen BJPC</a>
                    <Link to={'/'}><button id=''className="btn btn-outline-success" type="submit">Cerrar Sesion</button></Link>
                </div>
            </nav>
        </>
    )
}
