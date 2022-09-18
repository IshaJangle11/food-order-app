import React from 'react'

import css from './MenuComponent.css'

import MenuCardImg from '/RestaurantPage/menu.jpg'

import MenuCard from '../../../../../utils/Cards/RestaurantBodyCards/MenuCard/MenuCard'

const MenuComponent = () => {

  const menuCards = [
    {
      imgSrc: MenuCardImg,
      ttl: "Menu Car",
      pages: 23
    },
    
  ]

  return <div className={css.outerDiv}>
       <div className={css.ttl}>Shourya Hotel</div>
            <div className={css.menuCard}>
                  {menuCards?.map((val, id) => {
                      return <MenuCard key={id} imgSrc={val.imgSrc} ttl={val.ttl} pages={val.pages} />
                  })}
            </div>
      </div>
}

export default MenuComponent