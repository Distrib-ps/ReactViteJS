import { NavLink } from "react-router-dom";

const Nav = () => {

    const CheckIsActive = ({isActive}) => {
        return{
            color: isActive ? 'red': 'black',
            backgroundColor: isActive ? 'yellow': 'grey'
        }
    }

    return(
        <nav>
            <ul>
                <li>
                    <NavLink style={CheckIsActive} to="/UserForm">UserForm</NavLink>
                </li>
                <li>
                    <NavLink style={CheckIsActive} to="/DemoForm">DemoForm</NavLink>
                </li>
                <li>
                    <NavLink style={CheckIsActive} to="/DemoEvents">DemoEvents</NavLink>
                </li>
                <li>
                    <NavLink style={CheckIsActive} to="/Slider">Slider</NavLink>
                </li>
                <li>
                    <NavLink style={CheckIsActive} to="/Clock">Clock</NavLink>
                </li>
                <li>
                    <NavLink style={CheckIsActive} to="/DemoHook">DemoHook</NavLink>
                </li>
                <li>
                    <NavLink style={CheckIsActive} to="/Students">Students</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;