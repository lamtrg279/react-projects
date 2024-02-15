import {useState } from 'react'
import data from '../accordion/data.js'

export default function Accordion() {
  const [selected, setSelected] = useState(null)


  return <div className='wrapper'>
  <div className='accordion'>
    {
      data && data.length > 0 ? 
      data.map(dataItem => 
        <div className='item'>
          <div className='title'>
            <h3>{dataItem.question}</h3>
            <span>+</span>
          </div>
        </div>
        ) : <div>No data found</div>
    }
  </div>
  </div>
}