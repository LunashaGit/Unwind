import React from "react";
import {dataFooter} from "../data/dataFooter";
const FooterThree = () => {
    console.log(dataFooter);
    return (
        <div>
            <div>
                <h2>Professions</h2>
                { dataFooter[0].Professions.map(footer => {
                    return (
                        <a href="#">{footer}</a>
                    )
                })}
            </div>
            <div>
                <h2>Techniques</h2>
                { dataFooter[1].Technique.map(footer => {
                    return (
                        <a href="#">{footer}</a>
                    )
                })}
            </div>
            <div>
                <h2>Types</h2>
                { dataFooter[2].Types.map(footer => {
                    return (
                        <a href="#">{footer}</a>
                    )
                })}
            </div>
            <div>
                <h2>Thèmes</h2>
                { dataFooter[3].Thèmes.map(footer => {
                    return (
                        <a href="#">Photographe par {footer}</a>
                    )
                })}
            </div>
            <div>
            <h2>Villes</h2>
                { dataFooter[4].Villes.map(footer => {
                    return (
                        <a href="#">{footer}</a>
                    )
                })}
            </div>
            <div>
            <h2>Langues</h2>
                { dataFooter[5].Langues.map(footer => {
                    return (
                        <a href="#">{footer}</a>
                    )
                })}
            </div>
            
        </div>
    );
};

export default FooterThree;
