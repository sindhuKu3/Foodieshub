import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Sidebar = ({links}) => {
    return ( 
       <div className="Sidebar">
        {links.map(link=>(
          <Link to={link.path} href='/#' key={link.path}>
          <FontAwesomeIcon  icon={link.icon} />
          {link.name}</Link>
        ))}
        </div>
     );
}
 
export default Sidebar;