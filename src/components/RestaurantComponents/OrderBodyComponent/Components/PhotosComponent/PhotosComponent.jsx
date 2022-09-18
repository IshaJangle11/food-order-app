import {useState} from 'react'

import RedButton from '../../../../../utils/Buttons/RedButton/RedButton'
import WhiteButton from '../../../../../utils/Buttons/WhiteButton/WhiteButton'

import GalleryImgCard from '../../../../../utils/Cards/RestaurantHeroCards/GalleryImgCard/GalleryImgCard'


import Pizza from '/Collections/pizza.jpg'
import Sweet from '/Collections/SweetTooth.jpg'
import Paneer from '/Overview/paneer.jpg'
import PavBhaji from '/Overview/Pav-Bhaji.jpg'
import Pulao from '/Overview/Pulao.jpg'
import curry1 from '/Overview/Curry2.jpg'
import curry from '/Overview/curry.jpg'



import css from './PhotosComponent.module.css'

const PhotosComponent = () => {

  const allPhotosData = [
    {
      imgSrc: Pizza
    },
    {
      imgSrc: Sweet
    },
    {
      imgSrc: Paneer
    },
    {
      imgSrc: PavBhaji
    },
    {
      imgSrc: curry
    },
    {
      imgSrc: curry1
    },
    {
      imgSrc: Pulao
    },
    
  ]

  const foodPhotosData = [
    {
      imgSrc:Paneer
    },
    {
      imgSrc: curry1
    },
    {
      imgSrc: PavBhaji
    }
  ]

  const ambeiencePhotosData = [
    {
      imgSrc:Paneer
    },
    {
      imgSrc: curry1
    },
    {
      imgSrc:Pulao
    },
    {
      imgSrc: curry1
    },
    {
      imgSrc: PavBhaji
    }
  ]

  const [state, setState] = useState(allPhotosData)

  return <div className={css.outerDiv}>
    <div className={css.ttl}>Shouraya Hotels</div>
    <div className={css.btns}>
      <RedButton txt="All" count={23} onClick={() => setState(allPhotosData)} />
      <WhiteButton txt="Food" count={17} onClick={() => setState(foodPhotosData)} />
      <WhiteButton txt="Ambience" count={6} onClick={() => setState(ambeiencePhotosData)} />
    </div>
    <div className={css.photoCards}>
      {state?.map((item, id) => {
        return <div key={id} className={css.imgCard}>
          <GalleryImgCard imgSrc={item.imgSrc} />
        </div>
      })}
    </div>
  </div>
}

export default PhotosComponent