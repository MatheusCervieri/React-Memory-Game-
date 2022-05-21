import React from 'react'
import Cards from './Cards'

export default function Memorycards({ cardsarray,  setCardlistfun, randcardf}) {
  return (
    cardsarray.map(cards =>  {
        return <Cards key={cards.id} id={cards.id} text={cards.text} imgsrc={cards.imgsrc} clicked={cards.clicked} randcards={randcardf}/> ;
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
