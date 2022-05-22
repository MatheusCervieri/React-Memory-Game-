import React from 'react'
import img1 from '../imgs/1.png'
import StyleSheet from './cards.css'

export default function Cards({id, text, imgsrc, clicked, randcards, alreadyclick, points, setPoints, restartgame}) {
  function btnclick(){
    console.log(clicked);
    setPoints(points + 1);
    if(clicked == false)
    {
      clicked = true;
    }
    else{
      restartgame();
    }
    alreadyclick(id);
    randcards();
   
  }
  return (
    
    <div className="card" onClick={btnclick}>
      <center>
    <img className='img' src={imgsrc} />
    <div>{text}</div>
    </center>
    </div>
   
  )
}
