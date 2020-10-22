import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BeerDetailsCard from '../../Common/BeerDetailsCard/BeerDetailsCard';
import getBeerDetails from '../../Redux/Actions/ActionsCreators/BeerDetailsActionCreator';
import Style from './BeerDetails.module.scss'
function BeerDetails(props) {
    const { id } = props.match.params;
    // console.log(id);
    const Beer = useSelector(state => state.BeerDetailsReducer.Beer);
    const loading = useSelector(state => state.BeerDetailsReducer.loading);
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getBeerDetails(id))
    }, [])
    // console.log(loading);
    return (
        <div className={Style.BeerDetailPage}>
            {
                Beer.length > 0 && Beer.map(beer => <Fragment key={beer.id}>
                    <BeerDetailsCard beer={beer} />
                </Fragment>)
            }
            {
                loading && <h2 className={Style.Loading}>
                    Loading...
                </h2>
            }
        </div>
    )
}

export default BeerDetails
