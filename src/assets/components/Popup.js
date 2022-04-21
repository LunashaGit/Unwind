import React from "react";
import Therapie from "./Therapie";
import Avis from "./Avis";
import SignUp from "./SignUp";
import { Link, NavLink, Routes, Route } from "react-router-dom";

const Popup = () => {
    

    

    return (
        <div style={{position:"absolute"}}>
            <input type="button" value="Open Popup"className="btn-modal" />
            
        </div>
    );
};

export default Popup;
