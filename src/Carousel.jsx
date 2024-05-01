import { useState } from "react";
import { shortList,list,longList } from "./data"
import { GrFormNext } from 'react-icons/gr'
import { GrFormPrevious } from 'react-icons/gr'
import { IoChevronBack } from 'react-icons/io5'


import React from 'react'

const Carousel = () => {
    const [peopleList,setPeopleList] = useState(shortList);
    console.log(list);
    const [index,setIndex] = useState(0);
  return (
    <section className="slider-container">
      {peopleList.map((person) => {
          const { id, image, title, name, quote } = person
          return (
              <div className="slide" key={id}>
            <img src={image} alt={name} className="person-img" />
            <h3 className="name">{name}</h3>
            <h5 className="title">{title}</h5>
            <p className="text">{quote}</p>
          </div>
        )
    })}
    <GrFormPrevious className="prev"/>
      <GrFormNext className="next" />
    </section>
  )
}

export default Carousel