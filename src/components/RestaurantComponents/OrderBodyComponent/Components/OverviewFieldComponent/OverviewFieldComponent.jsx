import {Link, useParams} from "react-router-dom"

import css from './OverviewFieldComponent.module.css'

import rightArrrow from '/icons/right-arrow.png'
import food1 from '/overview/pav-bhaji.jpg'
import food2 from '/overview/pav-bhaji.jpg'
import CathTheMatachImg from '/Collections/trendingCuisine.jpg'
import SundayBrunch from '/Collections/brunch.jpg'
import happyHoursImg from "/overView/overview.jpg";
import happyHoursImg2 from "/overView/paneer.jpg";

import OverviewAboutCard from '../../../../../utils/Cards/RestaurantBodyCards/OverviewAboutCard/OverviewAboutCard'
import MenuCard from '../../../../../utils/Cards/RestaurantBodyCards/MenuCard/MenuCard'
import LabelUtil from '../../../../../utils/RestaurantUtils/LabelUtil/LabelUtil'

import RecentlyViewedCard from '../../../../../utils/Cards/RecentlyViewedCard/RecentlyViewedCard'
import CollectionsCard from '../../../../../utils/Cards/card2/CollectionsCard'

const OverviewFieldComponent = () => {
  const {city, hotel, page=""} = useParams();

  const data = {
    phone: "34251276327",
    address: "51, Vijay Nagar, Indore, Madhya Pradesh, India",
    lat: 11.11,
    lng: 18.31
  }

  const similarRest = [
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "Dum Biryani",
      ratingsDining: 4.5,
      ratingsDelivery: 6.6,
      address: "vijay Nagar,Indore",
      link: "#"
    },
    {
      id: 2,
      imgSrc: happyHoursImg2,
      name: "Paneer Chilly",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "vijay Nagar,Indore",
      link: "#"
    }
    
  ]

  const labels = [
    {link: "/", txt: "North Indian"},
    {link: "/", txt: "South Indian"},
    {link: "/", txt: "East Indian"},
    {link: "/", txt: "West Indian"},
    {link: "/", txt: "Desserts"}
  ]

  const menuData = [
    {ttl: "Food Menu", imgSrc:food1, pages:"23"},
  ]

  const moreInfo = ["Breakfast", "Takeaway Available", "Family Friendly", "Home Delivery", "Indoor Seating"]

  const collectionData = [
    {imgSrc: CathTheMatachImg, title: "Trending This Week", places: "27"},
    {imgSrc: SundayBrunch, title: "sunday Brunch", places: "25"},
  ]

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.leftBox}>
        <div className={css.ttl}>About this place</div>
        <div className={css.menuSec}>
          <div className={css.subTtl}>Menu</div>
          <Link to={`/${city}/${hotel}/menu`} className={css.menuLink}>See all menus <img src={rightArrrow} className={css.rightArrowIcon} alt="right arrow" /></Link>
        </div>
        <div className={css.menuSecBdy}>
          {menuData?.map((val, id) => {
            return <MenuCard key={id} ttl={val.ttl} imgSrc={val.imgSrc} pages={val.pages} />;
          })}
        </div>
        <div className={css.sec}>
          <div className={css.subTtl}>Cuisines</div>
          <div className={css.labels}>
            {labels?.map((val, id) => {
              return <LabelUtil key={id} link={val.link} txt={val.txt} />;
            }) }
          </div>
        </div>
        <div className={css.sec}>
            <div className={css.subTtl}>People Say This Place Is Known For</div>
            <div className={css.secTxt}>Great Buffet Spread, Fusion Dishes, Ample Seating Area, Family Place, Family Crowd, Quantity</div>
        </div>
        <div className={css.sec}>
            <div className={css.subTtl}>Average Cost</div>
            <div className={css.secTxt}>₹800 for two people (approx.)</div>
            <div className={css.secTxt1}>Exclusive of applicable taxes and charges, if any</div>
            <div className={css.toolTipBox}>
              <div className={css.secTxtToolTip}>
                How do we calculate cost for two?
              </div>
              {/* <div className={css.toolTip}>The cost for two is computed as follows: Average of 2 appetizers + 2 mains + 2 beverages + 1 dessert. The actual cost you incur at a restaurant might change depending on your appetite, or with changes in restaurant menu prices.</div> */}
            </div>
        </div>
        <div className={css.sec2}> 
            <div className={css.subTtl}>More Info</div>
            <div className={css.ulList}>
              {moreInfo?.map((val , id)=> {
                return <li key={id} className={css.list}>{val}</li>
              })}
            </div>
        </div>
        <div className={css.sec}>
            <div className={css.subTtl}>Featured In</div>
            <div className={css.secBdy}>
              {collectionData?.map((val , id)=> {
                return <CollectionsCard key={id}  imgSrc={val.imgSrc} title={val.title} places={val.places} />;
              })}
            </div>
        </div>
        <div className={css.sec}>
            <div className={css.subTtl}>Similar Restaurants</div>
            <div className={css.secBdy}>
              {similarRest.map((item) => {
                return <RecentlyViewedCard udata={item} key={item?.id} />;
              })}
            </div>
        </div>
      </div>
      <div className={css.rightBox}>
        <OverviewAboutCard data={data} />
      </div>
    </div>
  </div>
}

export default OverviewFieldComponent