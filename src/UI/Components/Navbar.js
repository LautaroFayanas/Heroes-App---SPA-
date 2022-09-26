import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Autenticacion/Context/AuthContext';


export const Navbar = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

    //Hook que nos ayuda con la navegacion
    const navigate = useNavigate();

    const onLogout = () => {
        //Navegar a ruta /login
        navigate('/login' , {      
            replace:true        //Replace hace que no puedas volver atras en el browser dejandote en /login
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                 <span className='nav-item nav-link text-primary'>
                        {user?.name}    {/* Si no tiene usuario que no continue. Si tiene, que busque el name */}        
                 </span>

                 <button 
                 onClick={onLogout}
                 className='nav-item nav-link btn btn-dark'>
                        Logout
                 </button>
                </ul>
            </div>
        </nav>
    )
}