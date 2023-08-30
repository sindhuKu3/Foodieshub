import './recipiesstyles.scss' ;
import './homepagestyles.scss' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Recipecard from './Recipecard';
const ReciSearches = () => {
    const Prev = [
     'Pav-bhaji' ,'Gol-gappe' ,'Biryani' ,'garlic-bread' , 'Bharva-bhindi' , 'tandoori-chicken' , 'salad' , 'tamatar-chat' ,'noodels' ,'uttapam'
    ]
    const Recipe = [
        {img:"./images/recipe_1.jpg",
       Name:"Moong-dal-kachori ",
      Detail: "The combination of the crunchy outer crust and the savory filling makes moong dal kachori a delicious treat.",
        Review:"⭐⭐⭐⭐⭐" } ,
        { img:"./images/recipe_2.jpg" ,
          Name:"Manchurian" ,
          Detail:"Manchurian is a popular Indo-Chinese dish made with fried vegetable or protein balls coated in a tangy sauce. " ,
          Review:"⭐⭐⭐⭐"
        },
        {img: "./images/recipe_3.webp",
         Name:"paneer-butter-masala ",
          Detail:"The paneer is cooked in a buttery and tangy gravy, which makes it incredibly tasty and satisfying.",
          Review:"⭐⭐⭐⭐" ,} ,
        {img: "./images/recipe_4.webp",
       Name: "Lyodur Tschaman ",
       Detail:"Lyodur Tschaman, is one delicacy that is sure to leave you craving more here Lyudor means yellow." ,
          Review:"⭐⭐⭐" ,} ,
        {img:"./images/recipe_5.jpg" ,
      Name: "Spinach and Ricotta Ravioli",
      Detail:"These ravioli stuffed with spinach and ricotta are simply divine. Make the pasta as part of your date night activity." ,
         Review: "⭐⭐⭐⭐⭐",} ,
        {img: "./images/recipe_6.jpeg",
        Name:" Pumpkin Risotto" ,
       Detail: "Pumpkin risotto is a delicious and comforting dish, perfect for chilly autumn evenings. ",
          Review:"⭐⭐⭐⭐"} ,
                {img: "./images/recipe_7.jpg",
           Name:"Chilli potato" ,
          Detail:"Chilli potato is a popular Indo-Chinese dish that consists of crispy fried potatoes coated in a spicy and tangy sauce." ,
                  Review: "⭐⭐⭐⭐",} ,
                {img:"./images/recipe_8.jpg" ,
          Name:"Pancake" ,
          Detail: "Pancake dishes are a versatile and delicious option for any meal.",
                  Review:"⭐⭐⭐⭐⭐" ,} ,
                {img: "./images/recipe_9.jpg",
         Name: "white-Sauce-pasta",
          Detail:"White sauce pasata is a combination of white sauce, a creamy and rich sauce made from butter. " ,
                 Review:"⭐⭐⭐⭐" ,} ,
               
    ]
    return ( 
        <>
        <div className="ReciSearch">
           <h2>Previous-Searches</h2>
      
        <div className="Previous-search">
      
     
     {Prev.map((prev, index) => (
                <button key={index}>{prev}</button>
            ))}
           
        </div>
        <div className="Searching">
          <input type="text" placeholder='search here' />
          <button type="button"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
        <div className="Recipesection">
        {Recipe.map(Recipe=><Recipecard key={Recipe.Name} Recipe={Recipe}/>)}
        </div>
        </div>
       </>
     );
        }

export default ReciSearches;