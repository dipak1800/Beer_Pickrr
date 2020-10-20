import React, { useState, useEffect, Fragment } from 'react'


import SearchInput from '../../Components/SearchBox/SearchInput'
import Style from './HomePage.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import getAllBeers from '../../Redux/Actions/ActionsCreators/getBeersActionCreator';


import BeersCard from '../../Common/BeersCards/BeersCard'
function HomePage() {
    let [pagenum, setPagenum] = useState(1);
    const Beers = useSelector(state => state.BeersReducer.Beers);
    const loading = useSelector(state => state.BeersReducer.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBeers(pagenum, Beers));

    }, [pagenum]);

    let handleInfiniteScroll = e => {
        let { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        // console.log(scrollTop, clientHeight, scrollHeight);
        if (scrollHeight - scrollTop == clientHeight) {
            setPagenum(++pagenum);
        }
    }
    return (
        <div className={Style.HomePage} onScroll={handleInfiniteScroll} >
            <SearchInput />

            <div className={Style.beerCard}>
                {
                    Beers.length > 0 ? (Beers.map(beer => <Fragment key={beer.id}>
                        <BeersCard beer={beer} id={beer.id} title={beer.name} tagline={beer.tagline} image_url={beer.image_url}
                            beer={beer}
                        />

                    </Fragment>)) : (<h1>There seems to be some problem with theServer</h1>)
                }

            </div>

            {
                loading && <h1 style={{ textAlign: "center" }}>Loading...</h1>
            }

        </div >
    )
}

export default HomePage
