
import { ReactNode } from 'react'
import './Cards.css'

interface CardsProps {
    children?: ReactNode  
}

export const Cards = ({ children }: CardsProps) => {
  return (
    <div className='card'>
        <div className='overlay'/>
        <div className='content'>{children}</div>
    </div>
  )
}
