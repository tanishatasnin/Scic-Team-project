import React, { useEffect, useState } from 'react';
import Tree from './Tree';

const Trees = () => {
               const [trees ,setTrees] =useState([])
               // _____ fetch ____ 
               useEffect(()=>{
                              fetch("http://localhost:5000/indoor-plants")  
                              .then(res=>res.json())   
                              .then(data=>setTrees(data))
               
                      },[])
               return (
                              < div >
                     <div>
                        <h1>OUR  <span className="The-Journal">plants</span></h1> 
                     </div>
                        <div className="row row-cols-1 row-cols-md-3">
                        {
       trees.map(tree => <Tree
           key={tree._id}
           tree={tree}
       ></Tree>)
   }
                 </div>        
                 </div>
               );
};

export default Trees;