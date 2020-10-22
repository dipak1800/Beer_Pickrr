import React, { useState } from 'react'
import Style from './BeersCard.module.scss'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { addToFavourate } from '../../Redux/Actions/ActionsCreators/addToFavorateActionCreator';
import { removeFromFavourate } from '../../Redux/Actions/ActionsCreators/addToFavorateActionCreator'
function BeersCard({ id, title, image_url, tagline, beer }) {
    const addedBeers = useSelector(state => state.addToFavorateReducer.allFavourateBeers);
    let dispatch = useDispatch();
    return (
        <div className={`card ${Style.BeersCard}`} style={{ width: "18rem", height: "425px", }}>
            <div className="img-fluid" style={{ width: "100%", height: "250px", marginTop: "4px" }}>
                {
                    (() => {
                        let alreadyExist = addedBeers.some(beer => beer.id == id);
                        if (alreadyExist) {
                            return <BsFillHeartFill style={{ color: "orangered" }} className={Style.heart} onClick={e => dispatch(removeFromFavourate(id))} />
                        }
                        else {
                            return <BsHeart className={Style.heart} onClick={e => dispatch(addToFavourate(beer))} />

                        }
                    })()

                }

                <img style={{ objectFit: 'contain', objectPosition: "center" }} src={image_url} className={`card-img-top image`} alt="Beers" width="100%" height="100%">

                </img></div>
            <div className={`card-body`} style={{ width: "100%", height: "150px" }}>
                <h5 style={{ textAlign: "center", marginTop: "3px" }} className={`card-title`}>{title.length > 24 ? title.slice(0, 24) + "..." : title}</h5>
                <p style={{ textAlign: "center" }} className={`card-text`}>{tagline.length > 55 ? tagline.slice(0, 55) + "..." : tagline}</p>
                <NavLink to={`/beerDetails/${id}`}>   <button style={{ marginTop: "5px", marginLeft: "32%" }} className={`btn btn-primary `}>Full Detail</button></NavLink>
            </div>
        </div>
    )
}

export default BeersCard;
