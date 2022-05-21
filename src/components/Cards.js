import React from 'react'
import img1 from '../imgs/1.png'

export default function Cards({id, text, imgsrc, clicked, randcards}) {
  function btnclick(){
    if(clicked == true){
      clicked = false;
      alert("You lost!");
      //samepoints.
      //restartgame
    }else{
    
    if(clicked == false){
      randcards();
      clicked = true;
      //makepoints
    }
  }
    
   
  }
  return (
    <div onClick={btnclick}>
      <center>
    <img src={imgsrc} />
    <div>{text}</div>
    </center>
    </div>
   
  )
}
