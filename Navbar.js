import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faTimes,faHome,faList,faGear} from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
const Navbar =() => {
    const [bar, setBar] = useState(false);
    const[showsidebar , setShowSidebar]=useState(false) ;
   
    const links=[
          {
            name:"Home",
            path:'/',
             icon:faHome},
          {
            name:"Setting",
           path:'setting',
            icon:faGear },
          {
            name:"Recipies",
            path:"recipies",
           icon: faList}
    ]
    const toggleSidebar = () => {
      setBar(!bar);
      setShowSidebar(!showsidebar);
  };
    return ( 
        <>
        <div className="Navbar">
            <Link to='/' href=".#/" className="logo">F<span>oo</span>diesHub</Link>
            <div  className="Nav-links">
                {links.map(link=>(
                    <Link to={link.path} href = '#/' key={link.path}>{link.name}</Link>
                    
                ))}
            </div>
           <div>

           <button onClick={toggleSidebar} id='active' className={bar ? "btn" : ""}><FontAwesomeIcon icon={bar ? faTimes : faBars} color='black' /></button>
                </div>
            </div>
            
            {showsidebar && <Sidebar links={links} />}
        </>
     );
}
 
export default Navbar;