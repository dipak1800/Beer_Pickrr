import React, { Fragment } from 'react'
import Style from './BeerDetails.module.scss';
import { FaStar } from "react-icons/fa";
function BeerDetailsCard({ beer }) {
    return (

        <div className="card mb-3" style={{ width: "96%", height: "98%" }}>
            <div className="row no-gutters" style={{ width: '100%', height: "100%" }}>
                <div className={`col-md-4 `} style={{ height: "100%" }} className="img-fluid">

                    <img className={Style.ImageDiv} style={{ objectFit: 'contain', objectPosition: "center" }} src={beer.image_url} className={`card-img-top image`} alt="Beers" width="100%" height="100%">

                    </img>
                </div>
                <div className="col-md-8">

                    <div className="card-body">
                        <h4 className="card-title">{beer.name} <span className={Style.ratings}><FaStar className={Style.star} />{beer.abv}</span></h4>
                        <p className="card-text">{beer.description}</p>
                        <p className="card-text"><small className="text-muted">{beer.tagline}</small></p>


                        <p style={{}}> <b style={{ fontWeight: "570" }}>Ingredients :</b>
                            {
                                beer.ingredients.malt.map((ingredient, i) => <Fragment key={i}><span className={Style.foodpairng}>{ingredient.name} - <small>
                                    {ingredient.amount.value}  {ingredient.amount.unit}</small></span></Fragment>)
                            }

                        </p>


                        <p> <b style={{ fontWeight: "570" }}>Food Pairnig :</b>
                            {
                                beer.food_pairing.map((food, i) => <Fragment key={i}><span className={Style.foodpairng}>{food}</span></Fragment>)
                            }

                        </p>


                        <p> <b style={{ fontWeight: "570" }}>Hops :</b>
                            {
                                beer.ingredients.hops.map((hop, i) => <Fragment key={i}><span className={Style.foodpairng}>{hop.name} - <small>
                                    {hop.amount.value}  {hop.amount.unit} (<i> {hop.add} , {hop.attribute}</i>)</small></span></Fragment>)
                            }

                        </p>
                        <p><b style={{ fontWeight: "570" }}>Tips :</b> {beer.brewers_tips}</p>
                        <p><b style={{ fontWeight: "570" }}>Contributed-By :</b> {beer.contributed_by}</p>
                        <div className={Style.moreInfo}>
                            <span><b>PH - </b> {beer.ph}</span>
                            <span><b>Attenuation - </b> {beer.attenuation_level}</span>
                            <span><b>Volume - </b> {beer.volume.value} {beer.volume.unit}</span>

                            <span><b>Temp - </b> {beer.method.mash_temp[0].temp.value} {beer.method.mash_temp[0].temp.unit}</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default BeerDetailsCard
