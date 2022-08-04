import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/SW.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHome, faLocust, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/' >
            <img src={LogoS} alt='logo' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to='/'>
                <FontAwesomeIcon icon={ faHome } color='#0081C2' />

            </NavLink>
            <NavLink exact='true' activeclassname="active" className='about-link' to='/about'>
                <FontAwesomeIcon icon={ faUser } color='#0081C2' />

            </NavLink>
            <NavLink exact='true' activeclassname="active" className='playground-link' to='/playground'>
                <FontAwesomeIcon icon={ faLocust } color='#0081C2' />

            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/hudson-lanier-a6ab12141/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#0081C2" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.github.com/hudsonlanier'>
                    <FontAwesomeIcon icon={faGithub} color="#0081C2" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.practicetwo.com'>
                    <FontAwesomeIcon icon={faBrain} color="#0081C2" />
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;
