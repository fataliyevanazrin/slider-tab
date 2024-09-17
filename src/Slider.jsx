import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import {longList} from "./data.js";

const Slider = ({person, setIndex, index}) => {
    const increseIndex = () => {
        if(index===longList.length-1){
            setIndex(0)
            return;
        }
        setIndex(index+1)
    }
    const decreaseIndex = () => {
        if(index===0){
            setIndex(longList.length-1)
            return;
        }
        setIndex(index-1)
    }
    return (
        <div className="slider" key={person.id}>
            <img
                src={person.image}
                alt={name}
                className="slider-img"/>
            <h3 className="slider-name">{person.name}</h3>
            <h4 className="slider-title">{person.title}</h4>
            <p className="slider-quote">{person.quote}</p>
            <FaQuoteRight className="slider-quote-right"/>
            <button className="btn btn-left" onClick={decreaseIndex}>
                <IoChevronBack className="chevron chevron-back"/>
            </button>
            <button className="btn btn-right" onClick={increseIndex}>
                <IoChevronForward className="chevron chevron-forward"/>
            </button>
        </div>
    )
}
export default Slider
