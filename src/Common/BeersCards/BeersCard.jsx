import React, { useState } from 'react'
import Style from './BeersCard.module.scss'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { addToFavourate } from '../../Redux/Actions/ActionsCreators/addToFavorateActionCreator';
function BeersCard({ id, title, image_url, tagline, beer }) {
    let dispatch = useDispatch();
    let [added, setadded] = useState(false)

    let handleAddToFavourate = (e, beer) => {
        dispatch(addToFavourate(beer));
        console.log(e);
        setadded(true)
    }
    return (
        <div className={`card ${Style.BeersCard}`} style={{ width: "18rem", height: "425px", }}>
            <div className="img-fluid" style={{ width: "100%", height: "250px", marginTop: "4px" }}>
                <BsHeart className={Style.heart} onClick={(e) => handleAddToFavourate(e, { ...beer, isAddedToFavourates: true })} />

                <img style={{ objectFit: 'contain', objectPosition: "center" }} src={image_url} className={`card-img-top image`} alt="Beers" width="100%" height="100%">

                </img></div>
            <div className={`card-body`} style={{ width: "100%", height: "150px" }}>
                <h5 style={{ textAlign: "center", marginTop: "3px" }} className={`card-title`}>{title.length > 24 ? title.slice(0, 24) + "..." : title}</h5>
                <p style={{ textAlign: "center" }} className={`card-text`}>{tagline.length > 55 ? tagline.slice(0, 55) + "..." : tagline}</p>
                <NavLink to={`/${id}`}>   <button style={{ marginLeft: "70px", marginTop: "5px" }} className={`btn btn-primary `}>Full Detail</button></NavLink>
            </div>
        </div>
    )
}

export default BeersCard;
