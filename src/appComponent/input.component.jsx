import React from 'react';
import './input.style.css'

const Form = properties => {
    return (
        <div className="container">
            <div>{properties.error ? error(): null}</div>
            <form onSubmit={properties.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-3">
                        <input type="text" className="from-control" name="city" autoComplete="off" placeholder="City" />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning">Get</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


function error() {
    return(
        <div className="alert alert-danger mx-5" role="alert">
        Invalid Location.
        </div>
    );
}

export default Form;
