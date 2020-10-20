import React, { Fragment } from 'react'
import Style from './BeerDetails.module.scss'
function BeerDetailsCard({ beer }) {
    return (

        <div className="card mb-3" style={{ width: "96%", height: "96%" }}>
            <div className="row no-gutters" style={{ width: '100%', height: "100%" }}>
                <div className="col-md-4" style={{ height: "100%" }} className="img-fluid">

                    <img style={{ objectFit: 'contain', objectPosition: "center" }} src={beer.image_url} className={`card-img-top image`} alt="Beers" width="100%" height="100%">

                    </img>
                </div>
                <div className="col-md-8">

                    <div className="card-body">
                        <h4 className="card-title">{beer.name}</h4>
                        <p className="card-text">{beer.description}</p>
                        <p className="card-text"><small className="text-muted">{beer.tagline}</small></p>
                        {
                            beer.food_pairing.map((food, i) => <Fragment key={i}><small>{food}</small></Fragment>)
                        }

                    </div>

                </div>
            </div>

        </div>

    )
}

export default BeerDetailsCard
