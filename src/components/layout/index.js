import { faAsterisk, faBacteria, faCarrot, faHome, faShapes } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdversal } from '@fortawesome/free-brands-svg-icons';
import Menu from '../menu/menu';

const Layout = () => {
    return (
        <div className='App'>
            <Menu />
            <div className='page'>
                <span className='tags top-tags'>
                <FontAwesomeIcon icon={faAsterisk}  /> 
                </span>
                <Outlet />
                <span className='tags bottom-tags'>
                <FontAwesomeIcon icon={faAsterisk}  /> 
                
                <br />
                <span className='bottom-tag-html'>
                 <FontAwesomeIcon icon={faBacteria}  />
                    </span></span>
            </div>
        </div>
    )
}

export default Layout; 