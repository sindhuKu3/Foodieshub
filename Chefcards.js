import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook ,faTwitter ,faInstagram} from '@fortawesome/free-brands-svg-icons';


const Chefcards = ({chef}) => {
   
    return ( 
        <div className="Chef-cards">
        <img src={chef.src}alt="time" />
        <div className="chef-info">
            <p className="chef-name">{chef.name}</p>
            <p className="recipe-count">Recipies:<b>{chef.Recipe}</b></p>
            <p className="chef-cuisine">Cuisine:<b>{chef.Cuisine}</b></p>
            <div className="chef-contact">
            <FontAwesomeIcon className='logo' icon={faFacebook} style={{color: "#4173c8",}} />
            <FontAwesomeIcon className='logo' icon={faTwitter} style={{color: "#158dc1",}} />
            <FontAwesomeIcon  className='.logo' icon={faInstagram} style={{color: "#f207c0",}} />
            </div>
        </div>
</div>
     );
}
 
export default Chefcards;