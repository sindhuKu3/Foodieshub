import './homepagestyles.scss' ;
import Customimg from "./Customimg";
const Pricontainer = ({imgSrc}) => {
  const images=[
 "./images/image_1.jpg",
   "./images/image_2.jpg",
    "./images/image_3.jpg",
  "./images/image_4.jpg",
   "./images/image_5.jpg",
    "./images/image_6.jpg",
   "./images/image_7.jpg",
   "./images/image_8.jpg",
  "./images/image_9.jpg"
  ];
    return (

      <div className="Pri-container">
        <div className="col info">
            <h1>what are we about </h1>
            <p> FoodiesHub allows you to easily search and discover a wide variety of delicious recipes from around the world. From appetizers to desserts, you can find it all on FoodiesHub. Whether you are a beginner or an experienced chef, this website has something for everyone. </p>
            <button>Explore Now</button>
            </div>
        <div className="col Gallery">
         {images.map((src,index)=>(
            <Customimg className="photo" key={index} imgSrc={src} />
         ))} 
        </div>
        </div>    

      
       


     );
}
 
export default Pricontainer;