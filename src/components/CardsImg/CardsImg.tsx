import './CardsImg.css'

interface TImg {
    href: string
}

export const CardsImg = ({href}:TImg) => {
  return (
    <img className='card-img' src={href}></img>
  )
}
