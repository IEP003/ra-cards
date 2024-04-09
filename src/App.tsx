import { data } from './data/data'
import { Cards } from './components/Cards/Cards'
import { CardsImg } from './components/CardsImg/CardsImg'
import './App.css'


function App() {

  return (
    <>
      <div className='cards-list'>
        {data.map((card, index) => (
          <Cards key={index} item={card}>
            {card.img? <CardsImg href={card.img}/> : ''}
            <h2 className='cards-title'>{card.title}</h2>
            <div className='cards-content'>{card.content}</div>
            <form action={card.link}>
              <button className='button'>Go somewhere</button>
            </form>
          </Cards>
        ))}
      </div>
    </>
  )
}

export default App
