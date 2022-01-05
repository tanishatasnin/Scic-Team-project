import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Buy = () => {
    const [bookedProduct, setbookedProduct] = useState(false);
    const { user } = useAuth({});
    const initialInfo = { name: '', customerName: user.displayName, customerEmail: user.email, number: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const customer = {
            ...bookingInfo,


            // date: date.toLocaleDateString()
        }
        fetch('https://boiling-forest-63211.herokuapp.com/customers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setbookedProduct(true);


                }
            });
        console.log(customer)
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleBookingSubmit}>
                {/* onSubmit={handleLoginForm} */}

                <label htmlFor="email"></label>
                <input
                    type="name"
                    name="Name"
                    onBlur={handleOnBlur}
                    placeholder="Name"
                    className="p-2 m-2  w-100 "
                    defaultValue={user.displayName}
                    required
                />

                <input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    className="p-2 w-100 m-2 "
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    required
                />
                <br />

                <input

                    name="number"
                    placeholder="phone Number"
                    className="p-2 m-2  w-100 "
                    onBlur={handleOnBlur}
                    required
                />
                <br />

                {bookedProduct && <Alert severity="success">Booking successfully!</Alert>}
                <input type="submit" value="Buy now" className="p-2 w-100 m-2" />
            </form>
        </div>
    );
};

export default Buy;