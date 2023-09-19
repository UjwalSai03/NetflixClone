import React, { useState } from 'react';
import "./List.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listItem/ListItem';
import { useRef } from 'react';
import { useScrollTrigger } from '@mui/material';

const List = () => {
  const [isMoved,setIsMoved] = useState(false);
  const [slideNumber,setSlideNumber] = useState(0);
  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber-1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    } 
    if(direction === "right" && slideNumber < 3){
      setSlideNumber(slideNumber+1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper"> 
        <ArrowBackIosIcon className='sliderArrow left' onClick = {() => handleClick("left")} style = {{display: !isMoved && "none"}}/>
        <div className="container" ref = {listRef}>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
            <ListItem index = {0}/>
        </div>
        <ArrowForwardIosIcon className='sliderArrow right' onClick = {() => handleClick("right")}/>
      </div>
    </div>
  );
}

export default List;
