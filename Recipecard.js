import './recipiesstyles.scss' ;
const Recipecard = ({Recipe}) => {
    return ( 
  <div className="Recipecard">
    <img src={Recipe.img} alt="error" width='346px' height='200' />
    <div className="Recipe-info">
    <p className="Recipename"><b>{Recipe.Name}</b></p>
    <p className="Recipe-detail">{Recipe.Detail}</p>
    <p className="Review">{Recipe.Review}</p>
    <button>Recipe</button>
    </div>
    </div>
     );
}
 
export default Recipecard;