import React from 'react';
import { Link } from "react-router-dom";

const GetADemoBottom = () => {
    return (
        <div className="card text-center" style={{ marginBottom: 75 }}>
            <div className="card-body">
                <h5 className="Titulo3">Get a demo</h5>
                <p className="card-text">Let us show you the system of Water Meter</p>
                <Link to='/get-a-demo'className="btn btn-water">Get Demo</Link>
            </div>
        </div>
    )
}

export default GetADemoBottom
