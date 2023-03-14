import React from "react";

const navBar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Full Stack</a>
                    <button className="btn btn-outline-light">
                        Add User
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default navBar;
