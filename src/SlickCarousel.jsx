import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {list} from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { GrFormNext } from 'react-icons/gr'

const SlickCarousel = () => {
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       //fade: true --you can use it just one slide
       autoplay: true,
       autoplaySpeed: 2000,
       pauseOnHover:true,
     }
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, title, name, quote } = person
          return (
            <article
              key={id}
            >
              <img src={image} alt={name} className="person-img" />
              <h3 className="name">{name}</h3>
              <h5 className="title">{title}</h5>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
      </Slider>
    </section>
  )
}

export default SlickCarousel