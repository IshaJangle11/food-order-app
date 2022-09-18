import { useState } from 'react';

import PlacesCard from '../../../utils/Cards/card3/PlacesCard'
import ShowMore from '../../../utils/Cards/card3/ShowMore'

import css from './PopularPlaces.module.css';

let PopularPlaces = () => {
    let [showMore, setShowMore] = useState();
    return <div className={css.outerDiv}>
        <div className={css.title}><span className={css.titleTxt}>Popular localities in and around</span> <span className={css.bld}>Pune</span></div>
        <div className={css.placesCards}>
            <PlacesCard place="Baner" count="1041"  link='/jubileehills' />
            <PlacesCard place="Kothrud" count="1345" link='/jubileehills' />
            <PlacesCard place="Kalyani Nagar" count="456" link='/jubileehills' />
            <PlacesCard place="Wakad" count="1452" link='/jubileehills' />
            <PlacesCard place="Hinjawadi" count="250" link='/jubileehills' />
            <PlacesCard place="Viman Nagar" count="1075" link='/jubileehills' />
            <PlacesCard place="Koregaon" count="2503" link='/jubileehills' />
            <ShowMore setShowMore={setShowMore} />
        </div>
    </div>
}

export default PopularPlaces;