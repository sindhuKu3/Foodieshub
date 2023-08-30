
import Chefcards from './Chefcards';


const Chefsection = () => {
  const chef = [
    {
      src :"./images/chef_1.jpg" ,
      name:'Julia child',
      Recipe:'20' ,
      Cuisine:'French' ,
    },
    {
      src :"./images/chef_2.jpg" ,
      name:'Massimo bottura',
      Recipe:'200' ,
      Cuisine:'Italian' ,
    },
    {
      src :"./images/chef_3.jpg" ,
      name:'Heston bluementhal',
      Recipe:'50' ,
      Cuisine:'British' ,
    },
    {
      src :"./images/chef_4.jpg" ,
      name:'Thomas Keller',
      Recipe:'20' ,
      Cuisine:'American' ,
    },
    {
      src :"./images/chef_5.jpg" ,
      name:'Joan Roca',
      Recipe:'150' ,
      Cuisine:'Spanish' ,
    },
    {
      src :"./images/chef_6.jpg" ,
      name:'Sanjeev kapoor',
      Recipe:'200' ,
      Cuisine:'North-Indian' ,
    }
  ]
     return ( 
        <>
      <div className="top-chief-section">
     <h1>Our top chiefs</h1>
     <div className="Chef-section">
      {chef.map(chef=><Chefcards key={chef.name} chef={chef}/>)}
       
   </div>
   </div> 
 
     </>
     );
}
 
export default Chefsection;