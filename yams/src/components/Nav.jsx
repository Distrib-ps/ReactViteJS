import { NavLink } from "react-router-dom";

const Nav = () => {

    const CheckIsActive = ({ isActive }) => ({
        color: isActive ? 'red' : 'black',
        backgroundColor: isActive ? 'yellow' : 'grey'
    });

    return(
        <nav>
            <ul>
                <li>
                    <NavLink style={CheckIsActive} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink style={CheckIsActive} to="/description">Description</NavLink>
                </li>
                {/* Remarque: Le lien vers Results ne sera probablement pas utilisé directement dans la navigation, 
                car les résultats sont généralement affichés après avoir joué le jeu depuis la Home */}
            </ul>
        </nav>
    );
};

export default Nav;
