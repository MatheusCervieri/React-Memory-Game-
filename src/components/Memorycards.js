import React from 'react'
import Cards from './Cards'

export default function Memorycards({restart, cardsarray,  setCardlistfun, randcardf, handleclicard,  pointsvar, setPointsvar}) {
  return (
    cardsarray.map(cards =>  {
        return <Cards key={cards.id} id={cards.id} text={cards.text} imgsrc={cards.imgsrc} clicked={cards.clicked} randcards={randcardf} alreadyclick={handleclicard} restartgame={restart} points={pointsvar} setPoints={setPointsvar}/> ;
    })
  )
}
/*
 const [cardslist, setCardslist] = useState([{
    id: uuidv4(),
    text: "Texto 1",
    imgsrc: "blabla",
    order: 1
  }]);
*/
