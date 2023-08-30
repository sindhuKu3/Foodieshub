import './settingstyles.scss' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Setting = () => {
    
   
    const [settings ,SetSettings] =useState(
     {
        "--background-color":"#fff",
        "--background-light":"#fff",
        "--shadow-color":"rgba(0,0,0,0.2)",
        "--primary-color":"rgb(255,0,86) ",
        "--text-color":"#0A0A0A ",
        "--text-light":"#9b8e8e" ,
        "--font-size":"16px" ,
        "--animation-speed":"1" 
     });
     useEffect(()=>{
     const root = document.documentElement;
     for(let key in settings){
        root.style.setProperty(key ,settings[key])}
},[settings]) 

     //changing theme 
     const [theme ,setTheme] = useState('Light') ;
     const themes = [
        { "--background-color":"#fff",
        "--background-light":"#fff",
        "--shadow-color":"rgba(0,0,0,0.2)",
        "--text-color":"#0A0A0A ",
        "--text-light":"#9b8e8e" ,
    },
    {
        "--background-color":"rgb(29 ,29,29)" ,
        "--background-light":"rgb(79, 76, 76)" ,
        "--shadow-color":"rgba(0,0,0,0.2)",
        "--text-color":"#ffffff ",
        "--text-light":"#eceaea" ,
    }
     ]
   function changeTheme(i){
    const _theme = {...themes[i]}
    setTheme(i === 0?"Light" :"Dark") ;
    //update setting 
    let _settings = {...settings} 
  for (let key in _theme){
      _settings[key] = _theme[key] 
    }
    SetSettings(_settings)
   }

     //changing color
     const primaryColors = [
        'rgb(255,0,86) ',
        'rgb(155, 118, 219)',
        'rgb(245, 212, 25)' ,
        'rgb(36, 245, 25)',
    ]
       const  [primaryColor ,setPrimaryColor] =useState(0) ;
       function changeColor(i){
         const _color = primaryColors[i] ;
         let _settings = {...settings} ;
         _settings["--primary-color"]=_color ;
         setPrimaryColor(i);
         SetSettings(_settings)
       }
    return (  
     <div className="Setting">
        <div className="Preferred Theme">
        <h2>Primary Theme :</h2>
                  <div className="Block">
                      <div className="Option Light" onClick={()=>changeTheme(0)}>
                        {theme === 'Light' && (
                            <div className="Check">
                            <FontAwesomeIcon icon={faCheck} size='2xl' />
                            </div>
                        )}
                      </div>
                     <div className="Option Dark"  onClick={()=>changeTheme(1)}>
                     {theme === 'Dark' && (
                        <div className="Check">
                            <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                     </div>  
                </div>     
        </div>
      <div className="Preferred Color">
             <h2>Preferred Color:</h2>
             <div className="Block">
                  {primaryColors.map((color , index)=>(
                   <div className="Option" style ={{backgroundColor:color}} onClick={()=>changeColor(index)}>
                        {primaryColor === index && (
                            <div className="Check">
                                <FontAwesomeIcon icon={faCheck} size='2xl'/>
                            </div>
                        )}
                         </div>
                   ))}
                
             </div>
      </div>
   </div>
  
  
    );
}
 
export default Setting;