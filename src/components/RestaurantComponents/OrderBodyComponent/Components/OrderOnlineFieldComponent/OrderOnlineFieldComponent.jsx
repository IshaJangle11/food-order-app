import {useEffect, useState} from 'react'
import {Formik, Form} from 'formik'

import css from './OrderOnlineFieldComponent.module.css'

import CheckBoxUtil from '../../../../../utils/FormUtils/CheckBoxUtil/CheckBoxUtil'


//import DownloadAppUtil from '../../../../../utils/RestaurantUtils/DownloadAppUtil/DownloadAppUtil'
import SmallSearchBarUtil from '../../../../../utils/RestaurantUtils/SmallSearchBarUtil/SmallSearchBarUtil'
import OfferTrackUtil from '../../../../../utils/RestaurantUtils/OfferTrackUtil/OfferTrackUtil'
import FoodItemProduct from '../../../../../utils/RestaurantUtils/FoodItemProduct/FoodItemProduct'

import compassIcon from '/icons/compass.png'
import clockIcon from '/icons/clock.png'
import vegIcon from '/icons/veg.png'

import hariyalikebab from '/images/hariyalikebab.jpg'

//import Pizza from '/Collections/pizza.jpg'
import Sweet from '/Collections/SweetTooth.jpg'
//import Paneer from '/Overview/paneer.jpg'
import PavBhaji from '/Overview/Pav-Bhaji.jpg'
import Pulao from '/Overview/Pulao.jpg'
import curry1 from '/Overview/Curry2.jpg'
import curry from '/Overview/curry.jpg'
import manchurian from '/RestaurantPage/manchurian.jpg'
import chinese from '/RestaurantPage/chinese.jpg'
import soup from '/RestaurantPage/soup.jpg'
import chapati from '/RestaurantPage/Chapati.jpg'
import TandoorRoti from '/RestaurantPage/tandoorRoti.jpg'
import paneerButter from '/RestaurantPage/paneerbutter.jpg'
import kofta from '/RestaurantPage/vegkofta.jpg'
import Tikka from '/RestaurantPage/paneertika.jpg'
import tandoori from '/RestaurantPage/chikentandoori.jpg'



const OrderOnlineFieldComponent = () => {

  const [isActive, setIsActive] = useState({
    recommended: true
  });
  const [foodType, setFoodType] = useState({
    veg: false, 
    egg: false
  });

  const offerTrackData = [
    {txt1: "up to ₹50% OFF up to ₹75 Paytm Cashback", txt2: "use code OFFER50"},
    
  ]

  const initialValues = {veg: false, egg: false}

  const foodItemsData = {
    recommended: [
      {mustTry:true, id:1, imgSrc:kofta, ttl:"Veg Kofta", votes:"12", price:"240", desc:"A generously stuffed dumpling of cottage cheese with fresh cream cooked in medium spicy gravy ", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:2,  imgSrc:paneerButter,ttl:"Paneer Masala", votes:"12", price:"183", desc:"A generously stuffed dumpling of cottage cheese with fresh cream cooked in medium spicy gravy ", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:3,imgSrc:Tikka, ttl:"Paneer Tikka", votes:"12", price:"223", desc:"A generously stuffed dumpling of cottage cheese with fresh cream cooked in medium spicy gravy ", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:4, imgSrc:curry1, ttl:"Tandoori Prawns", votes:"12", price:"1332", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:5, imgSrc:curry, ttl:"Chiken Butter Masala", votes:"12", price:"1423", desc:"Chicken with exotic Indian herbs .", vegNonveg:vegIcon, foodType: "veg"}
    ],
    biryanis: [
      {mustTry:true, id:6, imgSrc:Pulao, ttl:"Veg pulao", votes:"12", price:"1400", desc:"Originally made to make our guest at home this mix vegitable pulao.", vegNonveg:vegIcon, foodType: "egg"},
       ],
    indian: [
      {mustTry:true, id:7, imgSrc:PavBhaji, ttl:"Pav Bhaji", votes:"12", price:"1400", desc:"Pav Bhaji", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:8,  imgSrc:kofta,ttl:"Veg Kofta", votes:"12", price:"240", desc:"A generously stuffed dumpling of cottage cheese with fresh cream cooked in medium spicy gravy ", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true,imgSrc:paneerButter, ttl:"Paneer Masala", votes:"12", price:"183", desc:"A generously stuffed dumpling of cottage cheese with fresh cream cooked in medium spicy gravy ", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true,imgSrc:Tikka, ttl:"Paneer Tikka", votes:"12", price:"223", desc:"A generously stuffed dumpling of cottage cheese with fresh cream cooked in medium spicy gravy ", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:curry1, ttl:"Tandoori Prawns", votes:"12", price:"1332", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:curry, ttl:"Chiken Butter Masala", votes:"12", price:"1423", desc:"Chicken with exotic Indian herbs .", vegNonveg:vegIcon, foodType: "veg"}
    ],
    tandoori: [
      {mustTry:true, imgSrc:hariyalikebab, ttl:" Tandoori Kabab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      
      {mustTry:true,imgSrc:tandoori, ttl:"Chiken tandoori", votes:"12", price:"1400", desc:"Tandoori  [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
    ],
    chinese: [
      {mustTry:true, imgSrc:manchurian, ttl:"Manchurian", votes:"12", price:"140", desc:"Chinese Manchurian", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:chinese, ttl:"noodles Manchurian", votes:"12", price:"233", desc:"Chinese Manchurian and noodls", vegNonveg:vegIcon, foodType: "veg"},
      
    ],
    "Noodles & Fried Rice": [
      {mustTry:true, imgSrc:chinese, ttl:"noodles Manchurian", votes:"12", price:"233", desc:"Chinese Manchurian and noodls", vegNonveg:vegIcon, foodType: "veg"},            
    ],
    soups: [
     {mustTry:true, imgSrc:soup, ttl:"Vegetable soup", votes:"12", price:"233", desc:"Delicious vegetable Soup", vegNonveg:vegIcon, foodType: "veg"},      ],
    roti: [
      {mustTry:true, imgSrc:chapati, ttl:"Roti", votes:"12", price:"12", desc:"chapati", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, imgSrc:TandoorRoti, ttl:"Veg Curry", votes:"12", price:"10", desc:"Tandoori Roti", vegNonveg:vegIcon, foodType: "veg"},
     ],
    dessert: [
      {mustTry:true, imgSrc:Sweet, ttl:"Cake", votes:"12", price:"1400", desc:"Chocolate Cake", vegNonveg:vegIcon, foodType: "veg"},
      ],
  }

  let breakDiv = <hr className={css.hr2} />
  const foodItemsDataLength = Object.keys(foodItemsData).length

  const breakDivFunc = (index) => {
    if(+foodItemsDataLength- 1 > +index){
      return breakDiv;
    }
    breakDiv = ""
    return breakDiv;
  }

  const sideNavHandler = (val) => {
    setIsActive({[val?.[0]] : true});
    document.getElementById(`${val?.[0]}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const allTtls = document.querySelectorAll('[data-id=secTtl]');
    const options = {
      threshold: 0.1
    }

    const handleIntersection = (entries) => {
      entries?.map(entry => {
          if(entry.isIntersecting){
            document.querySelector(`[data-sb-id='${entry.target.id}']`)?.classList.add(css.activeNavTab);
          }else{
            document.querySelector(`[data-sb-id='${entry.target.id}']`)?.classList.remove(css.activeNavTab);
          }
        })
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    allTtls.forEach(post => observer.observe(post))
  }, [])

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.leftBox}>
        {Object.entries(foodItemsData)?.map((val, id) => {
          return <div data-sb-id={val?.[0]} key={id} onClick={() => sideNavHandler(val)} className={isActive[val?.[0]] ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}>{val?.[0]} ({val?.[1]?.length})</div>
        })}
      </div>
      <div className={css.rightBox}>
        <div className={css.hSec}>
            <div className={css.ttl}>Order Online</div>
            <SmallSearchBarUtil placeholder="Search within menu" />
        </div>
        <div className={css.tabBox}>
          <div className={css.tagLine}>
            <img src={compassIcon} className={css.clockIcon} alt="live track" />
            <span className={css.tabTxt}>Live track your order</span>
          </div>
          <div className={css.hr} />
          <div className={css.tagLine}>
            <img src={clockIcon} className={css.clockIcon} alt="time" />
            <span className={css.tabTxt}>30 min</span>
          </div>
        </div>
        <div className={css.offersTrack}>
          {offerTrackData?.map((val, id) => {
            return <OfferTrackUtil key={id} txt1={val.txt1} txt2={val.txt2} />
          })}
        </div>
        <div className={css.formBox}>
          <Formik initialValues={initialValues}>
              <Form className={css.form}>
                    <CheckBoxUtil label="Veg Only" name="veg" onChange={() => setFoodType(val => val?.veg ? {veg: false, egg: false} : {veg: true, egg: false})} checked={foodType?.veg || foodType?.egg} />
                    {foodType?.veg || foodType?.egg ? <CheckBoxUtil label="contains egg" name="egg" onChange={() => setFoodType(val => val?.egg ? {veg: true, egg: false} : {veg: true, egg: true})} checked={foodType?.egg} /> : ""}
               </Form>
          </Formik>
        </div>
        <div className={css.itemsBox} id='itemsBox'>
          {Object.entries(foodItemsData)?.map((val, index) => {
            return <div key={index} >
              <div className={css.sec} >
                <div className={css.secTtl}>{val[0]}</div>
                {foodType.egg ? 
                  val[1]?.map((item, id) => {
                    if(item?.foodType === "egg"){
                      console.log("Line 178"+val[0]);
                      return <FoodItemProduct   key={id} data={item} dataset="secTtl" id={val[0]}  />
                    }
                  })
                : 
                foodType.veg ?
                  val[1]?.map((item, id) => {
                    if(item?.foodType === "veg"){
                      console.log("Line 186"+val[0]);
                      return <FoodItemProduct   key={id} data={item} dataset="secTtl"  id={val[0]} />
                    }
                  })
                : 
                  val[1]?.map((item, id) => {
                    console.log( item);
                    return <FoodItemProduct  key={id} data={item} dataset="secTtl" id={val[0]}  />
                  })
                }
                {/* {val[1]?.map((item, id) => {
                  return <FoodItemProduct key={id} {...item}  />
                })} */}
              </div>
              {breakDivFunc(index)}
            </div>
          })}
        </div>
      </div>
    </div>
    {/*<DownloadAppUtil />*/}
  </div>
}

export default OrderOnlineFieldComponent