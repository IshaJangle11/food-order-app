import CollapsableCard from '../../../utils/Cards/CollapsableCard/CollapsableCard'

import css from './ExploreOptionsNearMe.module.css';

let ExploreOptionsNearMe = () => {
    let chain = ['Bakery Food near me', 'Berverages Food near me', 'Biryani food near me', 'burger food near me', 'Chinese food near me','Ice Cream food near me','North Indian food near me','Seafood near me','shake food near me','Sichuan food near me','Rolls food near me','Pizza food near me','Momos food near me','Sandwich food near me','street food near me','Mughlai food near me','North Indian food near me','kebab food near me', ]
    let chain2=['Bakeries near me','Clubs near me','Fine Dining near me','Food Court near me','Bhojanalya near me','Cafes near me','Casual Dining near me','Dhabas near me','Quick bites near me','Sweet shops near me',]
    let Chain3=['Mumbai','Delhi NCR','Hyderabad','Kolkata','Kanpur','Indore','Surat','Vadodara','Kota','Manali','Alhabad',]
   return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Explore options near me</div>
            <div className={css.cards}>
                <CollapsableCard title="Popular cuisines near me" content={chain} />
                <CollapsableCard title="Popular restaurant types near me" content={chain2} />
                <CollapsableCard title="Cities We Deliver To" content={Chain3} />
                
            </div>
        </div>
    </div>
}

export default ExploreOptionsNearMe;