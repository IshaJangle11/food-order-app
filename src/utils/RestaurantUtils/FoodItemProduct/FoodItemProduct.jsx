import {useState} from 'react'

import css from './FoodItemProduct.module.css'

import starGIcon from '/icons/starGIcon.png'
import starGrIcon from '/icons/starGrIcon.png'

const addToCart = (title, price, imgSrc) => {

   /* let cart = [];
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    else{
        cart.push{{'title' : title, 'price' : price}};
        localStorage.setItem("cart",JSON.stringify(cart));
        console.log(JSON.parse(localStorage.getItem("cart")).title);
    }*/

    var cart = JSON.parse(localStorage.getItem("cart"));

    if(cart == null)
    {
        let p = [];
        let items = {title: title, price: price, quantity: 1, imgSrc: imgSrc};
        p.push(items);
        localStorage.setItem("cart", JSON.stringify(p));
        console.log(localStorage.getItem("cart"));
        alert(title+" added to cart successfully!!");
    }
    else{
        let items = {title: title, price: price, quantity: 1, imgSrc: imgSrc};
        cart.push(items);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(localStorage.getItem("cart"));
        alert(title+" added to cart successfully!!");
        
    }

}


const FoodItemProduct = (props) => {
    let {imgSrc, ttl, votes, price, desc, vegNonveg, mustTry} = props.data;
    let dataset = props?.dataset;
    const [readMore, setReadMore] = useState(false)
  return <div className={css.outerDiv} data-id={dataset} id={props.id}>
    <div className={css.innerDiv}>
        {imgSrc ? <div className={css.imgBox}>
            <img src={imgSrc} className={css.img} alt='food item' />
            <img src={vegNonveg} className={css.typeImg} alt='veg or nonveg' />
        </div> : <img src={vegNonveg} className={css.typeImg2} alt="veg or nonveg" />}
        <div className={css.box}>
            <div className={css.ttl}>{ttl}</div>
            
            <div className={css.ttl}>
                <button onClick={event => addToCart(ttl, price, imgSrc)}>Add to cart</button>    
            </div>

            {mustTry ? <div className={css.tag}>MUST TRY</div> : "" }
            <div className={css.ratings}>
                <div className={css.stars}>
                    <img src={starGIcon} className={css.starIcon} />
                    <img src={starGIcon} className={css.starIcon} />
                    <img src={starGIcon} className={css.starIcon} />
                    <img src={starGrIcon} className={css.starIcon} />
                    <img src={starGrIcon} className={css.starIcon} />
                </div>
                <div className={css.votesTxt}>{votes} votes</div>
            </div>
            <div className={css.price}>₹{price}</div>
            <div className={css.desc}>
                {readMore ? desc : desc.substring(0, 100)}
                ...
                {!readMore ? <span className={css.readMore} onClick={() => setReadMore(true)}>read more</span> : ""}
            </div>
        </div>
    </div>
  </div>
}

export default FoodItemProduct