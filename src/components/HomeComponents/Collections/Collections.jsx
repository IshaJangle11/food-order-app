import css from './Collections.module.css'

import rightArrow from '/Collections/right-arrow.png'
import NewelyOpened from '/Collections/opened.jpg'
import TrendindThisweek from '/Collections/trendingCuisine.jpg'
import BestINpune from '/Collections/bestpune.jpg'
import BarsandPubs from '/Collections/bar.jpg'
import SundayBrunches from '/Collections/brunch.jpg'
import SweetTooth from '/Collections/SweetTooth.jpg'
import BestPizza from '/Collections/pizza.jpg'

import CollectionsCard from '../../../utils/Cards/card2/CollectionsCard'

let Collections = () => {
    return <div className={css.outerDiv}>
        <div className={css.title}>Collections</div>
        <div className={css.tagLine}>
            <span className={css.desc}>Explore curated lists of top restaurants, cafes, pubs, and bars in pune, based on trends</span>
            <span className={css.collectionPlacesTag}>All collections in Pune <span className={css.rightArrowBox}><img className={css.rightArrow} src={rightArrow} alt="right arrow" /></span></span>
        </div>
        <div className={css.cards}>
            <CollectionsCard imgSrc={SundayBrunches} title="Sunday Brunches" places="39" />
            <CollectionsCard imgSrc={SweetTooth} title="SweetTooth" places="42" />
            <CollectionsCard imgSrc={BestPizza} title="BestPizzaPlaces" places="26" />
            <CollectionsCard imgSrc={NewelyOpened} title="Newly Opened" places="30" />
            <CollectionsCard imgSrc={TrendindThisweek} title="Trending This week" places="19" />
            <CollectionsCard imgSrc={BestINpune} title="Best of Pune" places="30" />
            <CollectionsCard imgSrc={BarsandPubs} title="Calling all Bar Hoppers" places="30" />
        </div>
    </div>
}

export default Collections;