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


function App() {
const [points, setPoints] = useState(0);
const [maxscore, setMaxscore] = useState(0);
  const cardsarray = [{
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
  }]
  const [cardslist, setCardslist] = useState(cardsarray);
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
function restartgame(){
  alert("The Game End :( and you made " + points + "points");
  if(points > maxscore){
    setMaxscore(points);
  }
  setPoints(0);
  setCardslist(cardsarray);
  randcards();
}
function randcards(){
  let newcardsarray = [...cardslist];
  shuffleArray(newcardsarray);
  setCardslist(newcardsarray);
}
function cardclickHandle(id){
  const newcardsarray = [...cardslist];
  const card = cardslist.find(card => card.id === id);
  card.clicked = !card.clicked;
  console.log(newcardsarray);
  setCardslist(newcardsarray);
}
/*
 function checkHandle(id){
  const newtodos = [...arraytodos];
  const todo = newtodos.find(todo => todo.id === id);
  todo.checked = !todo.checked;
  setArraytodos(newtodos);
 }
*/

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
      <Memorycards cardsarray={cardslist} setCardlistfun={setCardslist} randcardf={randcards} handleclicard={cardclickHandle} pointsvar={points} setPointsvar={setPoints} restart={restartgame}/>
    </div>
     </center>
    </div>
  );
}

export default App;
