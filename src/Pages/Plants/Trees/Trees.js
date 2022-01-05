import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav';
import Tree from './Tree';

const Trees = () => {
    const [trees, setTrees] = useState([])
    // _____ fetch ____ 
    useEffect(() => {
        fetch("https://boiling-forest-63211.herokuapp.com/indoor-plants")
            .then(res => res.json())
            .then(data => setTrees(data))

    }, [])
    return (
        < div >
            <Nav></Nav>
            <div>
                <br /><br /><br /><br /><br />
                <h1>Our  <span className="The-Journal green-text">Plants</span></h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    trees.map(tree => <Tree
                        key={tree._id}
                        tree={tree}
                    ></Tree>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Trees;