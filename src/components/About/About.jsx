import React from "react";
import profile from "../../assets/images/1998.webp";

function About(){
    return(
        <div className="container">
            <div className="row">
                <img src={profile} className="col-md-3 col-sm-6 col-xs-12 img-responsive" />
                <p className="col-md-9 col-sm-6 col-xs-12">Text here Text here Text here Text here Text here Text here Text here </p>
            </div>
        </div>
    );
}

export default About;