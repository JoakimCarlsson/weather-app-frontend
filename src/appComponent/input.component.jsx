import React from 'react';
import './input.style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
const Form = properties => {
    return (
        <div className="container">
            <div className="col-md-6 center">
                <div>{properties.error ? error() : null}</div>
                <form onSubmit={properties.loadWeather}>
                    <div className="input-group rounded">
                        <input type="search" type="text" className="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" name="city" autoComplete="off" placeholder="City" />
                        <button className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
    // return (
    //     <div className="container">
    //         <div>{properties.error ? error(): null}</div>
    //         <form onSubmit={properties.loadWeather}>
    //             <div className="row">
    //                 <div className="col-md-3 offset-md-3">
    //                     <input type="text" className="from-control" name="city" autoComplete="off" placeholder="City" />
    //                 </div>
    //                 <div className="col-md-3">
    //                     <button className="btn btn-warning">Get</button>
    //                 </div>
    //             </div>
    //         </form>
    //     </div>
    // );
}


function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Invalid Location.
        </div>
    );
}

export default Form;
