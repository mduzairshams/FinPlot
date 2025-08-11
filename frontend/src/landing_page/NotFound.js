import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5-4">404 Not Found</h1>
                <p>Sorry the page you are searching for doesn't exist</p>
                <Link to={"/"}>
                <button className='p-2 fs-4  btn btn-primary mb-5' style={{width:"15%" , margin: "0 auto", fontWeight:"500" }}>Go Home <i class="fa-solid fa-arrow-right"></i> </button>
                </Link>
            </div>
        </div>
     );
}

export default NotFound;