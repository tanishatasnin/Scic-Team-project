import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IndoorTree from '../IndoorTrees/IndoorTree';


const Allproduct = () => {
               const { productId } = useParams();
    const [product,setProduct] = useState([])
    // console.log(product);
    useEffect(()=>{
               fetch(`https://boiling-forest-63211.herokuapp.com/plants/${productId}`)
               .then(res=>res.json())
               .then(data=> setProduct(data.more))
           },[])

           
          
               return (
                
                              <div>
                               {
       product.map(plant => <IndoorTree
          //  key={plant._id}
           plant={plant}
       ></IndoorTree>)
   }
                                

                             
                              </div>
               );
};

export default Allproduct;