import './homepagestyles.scss' ;
const Seccontainer = () => {
  const features=[
    "Learn new recipies",
   "Experiment with food" ,  
    "Write your own recipies",
   " know nutritous factor",
    " Get cooking tips",
   " Get ranked"
  ];
    return ( 
        <div className="Sec-container">
        <div className="col">
         <img src="./images/main image.jpg" alt="" width='400px' height='430px' />
        </div>
        <div className="col">
        <h1>Improve your cullinary skill</h1>
        {features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
        <button>SignUp now</button>
        </div>
      </div>
     
     );
}
 
export default Seccontainer;