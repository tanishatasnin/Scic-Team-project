import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Buy from './Buy';
import Simpleslider from './Simpleslider';

const SingleTree = () => {
  const { treeId } = useParams();
  const [tree, setTree] = useState({})
  useEffect(() => {
    fetch(`https://boiling-forest-63211.herokuapp.com/indoor-plants/${treeId}`)
      .then(res => res.json())
      .then(data => setTree(data))
  }, [])
  return (
    <div class="container">
      <div class="row row-cols-3 m-4 mx-4">


        <div class="col">
          <br /><br /><br /><br />
          <img className='tree-img' src={tree.image} alt="" />
        </div>
        <div class="col text-start about-part">
          <br /><br /><br /><br /><br />
          <h2 className='text-danger'>{tree.name}</h2>
          <h5>{tree.title}</h5>
          <p>{tree.about}</p>
          <h5>{tree.tags}</h5>

          <input
            type="number"
            name="number"
            placeholder="1"
            className="single-form p-2 m-2"
            //               onBlur={handlePasswordChange}
            required
          />
          <h1>$ {tree.price} <span className='fs-6'>(Per)</span> </h1>

        </div>
        {/* +++++ form +++++++++  */}
        <div class="col">
          <br /><br /><br /><br />
          <Buy></Buy>

        </div>
      </div>
      <hr />
      <Simpleslider></Simpleslider>
    </div>

  );
};

export default SingleTree;