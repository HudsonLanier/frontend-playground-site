import './menu.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/SW.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHome, faLocust, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Menu = () => (
    <header>
        <h1 class="logo">Logo</h1>
        <input type="checkbox" class="nav-toggle" id="nav-toggle"></input>
        <nav class="navbar"> 
            <ul>
                <li><a href ="/">Home</a></li>
                <li><a href ="Playground">Playground</a></li>
                <li><a href ="/about">About</a></li>
        
            </ul>
        </nav>
        <label for="nav-toggle" class="toggle-label"><span></span></label>
    </header>
)

export default Menu