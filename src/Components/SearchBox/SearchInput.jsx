import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import getBeersByName, { cancelSearch } from '../../Redux/Actions/ActionsCreators/getBeersByNameActionCreator'
import Style from './SearchInput.module.scss';
import { BiSearchAlt2 } from "react-icons/bi";
import { ImCross } from "react-icons/im";
function SearchInput() {
    let [userSearched, setUserSearched] = useState("");
    const Beers = useSelector(state => state.GetBeersByNameReducer.Beers);
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getBeersByName(userSearched));
    };
    const handleCancellation = (e) => {
        e.preventDefault();
        dispatch(cancelSearch());
        setUserSearched("");
    }
    // console.log(Beers.length)
    return (
        <div className={Style.inputBox}>
            <form onSubmit={Beers.length > 0 ? handleCancellation : handleSubmit} className={Style.BeerForm} >
                <div className={`form-group ${Style.customInput}`}>
                    <input value={userSearched} required={Beers.length > 0 ? false : true} type="text" name="" id="" className="form-control" placeholder="Search for Beers 🍻" onChange={e => setUserSearched(e.target.value)} />
                </div>
                <button type="submit" className={`btn btn-small ${Beers.length ? Style.customButton2 : Style.customButton}`}>{Beers.length > 0 ? <ImCross style={{ fontSize: "15px" }} /> : <BiSearchAlt2 style={{ fontSize: "20px" }} />} {Beers.length > 0 ? "Cancel" : "Search"}</button>
            </form>
        </div>
    )
}

export default SearchInput
