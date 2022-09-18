import React from 'react'

import css from './HeroComponent.module.css'

import food1Img from '/RestaurantPage/food1.jpg';
import food2Img from '/RestaurantPage/food2.jpg';
import food3Img from '/RestaurantPage/food3.jpg';
import food4Img from '/RestaurantPage/food4.jpg';

import GalleryImgCard from '../../../utils/Cards/RestaurantHeroCards/GalleryImgCard/GalleryImgCard'
import AddPhotosCard from '../../../utils/Cards/RestaurantHeroCards/AddPhotosCard/AddPhotosCard'
import ViewGalleryImgCard from '../../../utils/Cards/RestaurantHeroCards/ViewGalleryImgCard/ViewGalleryImgCard'

const HeroComponent = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.scr1}>
        <GalleryImgCard imgSrc={food1Img} />
      </div>
      <div className={css.scr2}>
          <GalleryImgCard imgSrc={food2Img} />
          <ViewGalleryImgCard imgSrc={food4Img} />
          <GalleryImgCard imgSrc={food3Img} />
          <AddPhotosCard />
      </div>
    </div>
  </div>
}

export default HeroComponent