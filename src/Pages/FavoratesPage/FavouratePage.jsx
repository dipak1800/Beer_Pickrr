import React, { Fragment } from 'react'
import Style from './FavouratePage.module.scss';
import { BsFillHeartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

import FavourateCard from '../../Common/FavourateCard/FavourateCard'

function FavouratePage() {
    const allAddedFavourates = useSelector(state => state.addToFavorateReducer.allFavourateBeers);
    return (
        <div className={Style.container}>
            <h2 className={Style.favourates}>My Favourates  <BsFillHeartFill className={Style.love} /> </h2>
            <div className={allAddedFavourates.length > 0 ? Style.gridSubContainer : Style.subContainer}>
                {allAddedFavourates.length > 0 ? allAddedFavourates.map(favourateBeer => <Fragment key={favourateBeer.id}><FavourateCard favourateBeer={favourateBeer} /></Fragment>) : <div className={Style.noBeers}><h3 style={{ marginBottom: "40px" }}>You Don't have any Favourate Beers Yet 😭</h3></div>}
            </div>

        </div>
    )
}

export default FavouratePage
