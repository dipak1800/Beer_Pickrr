import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BeerDetailsCard from '../../Common/BeerDetailsCard/BeerDetailsCard';
import getBeerDetails from '../../Redux/Actions/ActionsCreators/BeerDetailsActionCreator';
import Style from './BeerDetails.module.scss'
function BeerDetails(props) {
    const { id } = props.match.params;
    console.log(id);
    const Beer = useSelector(state => state.BeerDetailsReducer.Beer);
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getBeerDetails(id))
    }, [])
    console.log(Beer[0]);

    return (
        <div className={Style.BeerDetailPage}>
            {
                Beer.length && Beer.map(beer => <Fragment key={beer.id}>
                    <BeerDetailsCard beer={beer} />
                </Fragment>)
            }
        </div>
    )
}

export default BeerDetails
