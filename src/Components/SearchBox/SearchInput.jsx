import React from 'react'
import Style from './SearchInput.module.scss';
function SearchInput() {
    return (
        <div className={Style.inputBox}>
            <form className={Style.BeerForm} >
                <div className={`form-group ${Style.customInput}`}>
                    <input required type="text" name="" id="" className="form-control" placeholder="Search for Beers 🍻" />
                </div>
                <button type="submit" className={`btn btn-small ${Style.customButton}`}>Submit</button>
            </form>
        </div>
    )
}

export default SearchInput
