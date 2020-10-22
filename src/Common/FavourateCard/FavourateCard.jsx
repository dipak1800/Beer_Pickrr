import React from 'react'
import Style from './FavourateCard.module.scss'
import { MdDeleteForever } from "react-icons/md";
import { removeFromFavourate } from '../../Redux/Actions/ActionsCreators/addToFavorateActionCreator';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert'

function FavourateCard({ favourateBeer }) {
    const dispatch = useDispatch();
    const handleDelete = (id) => {


        swal({
            title: "Are you sure?",
            text: "This Beer will be removed from Your Favourates!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(removeFromFavourate(id));
                    swal("Beer Removed!", {
                        icon: "success",
                    });
                } else {
                    swal("Don't worry It won't be removed 😊!");
                }
            });

    }

    return (

        <div className={`card mb-3 ${Style.favourateCard}`}>
            <span className={Style.removeBeer} ><MdDeleteForever onClick={e => handleDelete(favourateBeer.id)} className={Style.removeBtn} /></span>
            <div className={`row no-gutters`} style={{ width: "100%", height: "100%" }} >
                <div className="col-md-4" style={{ height: "100%", width: "30%", }} className="img-fluid">

                    <img style={{ objectFit: 'contain', objectPosition: "center" }} src={favourateBeer.image_url} className={`card-img-top image`} alt="Beers" width="100%" height="84%">

                    </img>
                </div>
                <div className={`col-md-8`} style={{ height: "100%", width: "60%", }}>
                    <div className={`card-body`}>
                        <h5 className={`card-title`}>{favourateBeer.name.length > 30 ? favourateBeer.name.slice(0, 30) + "..." : favourateBeer.name}</h5>
                        <p className={`card-text`}>{favourateBeer.description.length > 100 ? favourateBeer.description.slice(0, 100) + "..." : favourateBeer.description}</p>
                        <p className={`card-text`}><small className={`text-muted`}>{favourateBeer.tagline}</small></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FavourateCard
