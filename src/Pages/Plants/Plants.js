import React, { useEffect, useState } from 'react';
import Plant from './Plant';


const Plants = () => {
    const [plants, setPlants] = useState([])
    // _________________ data fetch from fake data  _____________ 
    useEffect(() => {
        fetch("https://boiling-forest-63211.herokuapp.com/plants")
            .then(res => res.json())
            .then(data => setPlants(data))

    }, [])

    return (
        < div >
            <div className='mt-5 pt-2'>

                <h1>Our  <span className="The-Journal green-text"> Beautiful plants</span></h1>
            </div>
            <div className="row row-cols-1 pt-5 row-cols-md-3">
                {
                    plants.map(plant => <Plant
                        key={plant._id}
                        plant={plant}
                    ></Plant>)
                }
            </div>
        </div>
    );
};

export default Plants;