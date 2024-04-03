import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
    const [success, setSuccess] = useState('');
axios.defaults.withCredentials=true;
    useEffect(() => {
        axios.get('http://localhost:8001/admin')
            .then(res => {
                if (res.data === "Successful") {
                    setSuccess('Ok');
                } else {
                    // Navigate to home page
                }
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Welcome to admin</h1>
            <p>{success}</p>
        </div>
    );
}
