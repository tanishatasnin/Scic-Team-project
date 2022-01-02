import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IndoorTree from '../IndoorTrees/IndoorTree';


const Allproduct = () => {
               const { productId } = useParams();
    const [product,setProduct] = useState([])
    // console.log(product);
    useEffect(()=>{
               fetch(`http://localhost:5000/plants/${productId}`)
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
                                {/* <h1>id is {productId}</h1>  
                                <h1>{product[0].name}</h1>
                                <img src={product.image} alt="" />
                                <h1>{product.about}</h1> */}

                                {/* <h1>{product.more.title}</h1>            */}
                              </div>
               );
};

export default Allproduct;