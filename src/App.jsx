import HomePageBanner from './components/HomeComponents/HomePageBanner/HomePageBanner'
import SmallCard from './utils/Cards/card1/SmallCard'
import Collections from './components/HomeComponents/Collections/Collections'
import PopularPlaces from './components/HomeComponents/PopularPlaces/PopularPlaces'
import GetTheApp from './components/HomeComponents/GetTheApp/GetTheApp'
import ExploreOptionsNearMe from './components/HomeComponents/ExploreOptionsNearMe/ExploreOptionsNearMe'
import Footer from './components/Footer/Footer'

import orderOnlineImg from '/Homepage/orderonline.jpg'
import diningImg from '/Homepage/dining.jpg'
//import proandproplusImg from '/images/proandproplus.jpg'
import nightlifeandclubsImg from '/Homepage/nightlife.jpg'

import css from './App.module.css'

import { orderOnlinePage, diningOutPage, nightLifePage } from './helpers/constants';

function App() {

  return <>
    <HomePageBanner />
    <div className={css.bodySize}>
      <div className={css.chooseTypeCards}>
        <SmallCard imgSrc={orderOnlineImg} text="Home Delivery" link={"/show-case?page=" + orderOnlinePage} />
        <SmallCard imgSrc={diningImg} text="Dining" link={'/show-case?page=' + diningOutPage} />
        {/*<SmallCard imgSrc={proandproplusImg} text="Pro and Pro Plus" link={'/show-case?page=' + proAndProPlusPage} />*/}
        <SmallCard imgSrc={nightlifeandclubsImg} text="NightLife and Clubs" link={'/show-case?page=' + nightLifePage} />
      </div>
      <Collections />
      <PopularPlaces />
    </div>
    <GetTheApp />
    <ExploreOptionsNearMe />
    <Footer />
  </>
}

export default App
