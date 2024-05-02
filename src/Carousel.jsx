import { useState } from "react";
import { shortList,list,longList } from "./data"
import { GrFormNext } from 'react-icons/gr'
import { GrFormPrevious } from 'react-icons/gr'
import { IoChevronBack } from 'react-icons/io5'
import {FaQuoteRight} from 'react-icons/fa'


import React from 'react'

const Carousel = () => {

    const prevSlide=()=>{
            setCurrentPerson((oldPerson) => {
              const result = [oldPerson - 1+peopleList.length] % peopleList.length
              return result
            })
    };
    const nextSlide = () => {
      setCurrentPerson((oldPerson)=>{
        const result = [oldPerson+1]%peopleList.length
      return result;
      })
    };
    const [currentPerson,setCurrentPerson]=useState(0);
    const [peopleList,setPeopleList] = useState(longList);

  return (
    <section className="slider-container">
      {peopleList.map((person,personIndex) => {
        const { id, image, title, name, quote } = person
        return (
          <article className="slide" style={{
            transform:`translateX(${100*(personIndex-currentPerson)}%)`,opacity:`${personIndex===currentPerson?1:0}`,visibility:`${personIndex===currentPerson?'visible':'hidden'}`}} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h3 className="name">{name}</h3>
            <h5 className="title">{title}</h5>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        )
      })}
      <button 
      type="button" 
      className="prev"
      onClick={prevSlide}>
        <GrFormPrevious />
      </button>
      <button 
      type="button" 
      className="next"
      onClick={nextSlide}>
        <GrFormNext />
      </button>
    </section>
  )
}

export default Carousel