import React, { useState, useEffect, Fragment } from 'react'
import Loader from 'react-loader-spinner'
import SearchInput from '../../Components/SearchBox/SearchInput'
import Style from './HomePage.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import getAllBeers from '../../Redux/Actions/ActionsCreators/getBeersActionCreator';


import BeersCard from '../../Common/BeersCards/BeersCard'
import ScrollToTopButton from '../../Components/ScrollToTop/ScrollToTop';
function HomePage() {
    let [pagenum, setPagenum] = useState(1);
    let [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

    const Beers = useSelector(state => state.BeersReducer.Beers);
    const BeersByName = useSelector(state => state.GetBeersByNameReducer.Beers);
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
        if (scrollTop > 2000) {
            setShowScrollToTopButton(true)
        } else if (scrollTop < 5400) {
            setShowScrollToTopButton(false)
        }
    }
    const handleScrollToTop = () => {
        document.getElementById("beerDiv").scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div id="beerDiv" className={Style.HomePage} onScroll={!BeersByName.length && handleInfiniteScroll} >
            <SearchInput />
            {BeersByName.length > 0 ?

                <div className={Style.beerCard}>
                    {
                        BeersByName.length > 0 && (BeersByName.map(beer => <Fragment key={beer.id}>
                            <BeersCard beer={beer} id={beer.id} title={beer.name} tagline={beer.tagline} image_url={beer.image_url}
                                beer={beer}
                            />

                        </Fragment>))
                    }

                </div> :



                <div className={Style.beerCard}>
                    {
                        Beers.length > 0 && (Beers.map(beer => <Fragment key={beer.id}>
                            <BeersCard beer={beer} id={beer.id} title={beer.name} tagline={beer.tagline} image_url={beer.image_url}
                                beer={beer}
                            />

                        </Fragment>))
                    }

                </div>}

            {
                loading &&
                <div className={Style.loader}>
                    <Loader

                        type="Hearts"
                        color="blue"
                        height={100}
                        width={100}

                    />
                </div>
            }
            <ScrollToTopButton handleScrollToTop={handleScrollToTop} showScrollToTopButton={showScrollToTopButton} />
        </div >
    )
}

export default HomePage
