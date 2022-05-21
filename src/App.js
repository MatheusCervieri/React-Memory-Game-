import { useState } from 'react';
import { useEffect } from 'react';
import Memorycards from './components/Memorycards';
import { v4 as uuidv4 } from 'uuid'; //npm i uuid || uuidv4()
import img1 from './imgs/1.png'
import img2 from './imgs/2.jpg'
import img3 from './imgs/3.jpg'
import img4 from './imgs/4.jpg'
import img5 from './imgs/5.jpg'
import StyleSheet from './style.css'

let points = 0;
let maxscore = 0;

function App() {
  const [cardslist, setCardslist] = useState([{
    id: uuidv4(),
    text: "Flufi",
    imgsrc: img1,
    clicked: false
  }, {
    id: uuidv4(),
    text: "Joh",
    imgsrc: img2,
    clicked: false
  },{
    id: uuidv4(),
    text: "Kat",
    imgsrc: img3,
    clicked: false
  },{
    id: uuidv4(),
    text: "Bob",
    imgsrc: img4,
    clicked: false
  },
  {
    id: uuidv4(),
    text: "Wint",
    imgsrc: img5,
    clicked: false
  }]);
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
function randcards(){
  let newcardsarray = [...cardslist];
  shuffleArray(newcardsarray);
  setCardslist(newcardsarray);
}

  useEffect(() => {
   randcards();
  }, [])

  return (
    <div>
      <center>
        <h1>Memory Game With React</h1>
        <h3>Points: {points} </h3>
        <h3>Max Score: {maxscore}</h3>
    <div className='cards'>
      <Memorycards cardsarray={cardslist} setCardlistfun={setCardslist} randcardf={randcards}/>
    </div>
     </center>
    </div>
  );
}

export default App;
