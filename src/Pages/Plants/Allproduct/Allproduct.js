import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Allproduct = () => {
               const { productId } = useParams();
    const [plant,setProduct] = useState({})
    useEffect(()=>{
               fetch(`data.json/${productId}`)
               .then(res=>res.json())
               .then(data=> console.log(data))
           },[])
               return (
                              <div>
                                <h1>id is {plant.name}</h1>             
                              </div>
               );
};

export default Allproduct;