import React, { useState } from 'react'
import './Form.scss'

export default function FormTag({
    className='',
    listTags =[],
    tagClassName ='',
}) {
  const [selectedTags, setSelectedTags] = useState([]);
  
  return (
    <div className={`form__tags ${className}`}>
        {listTags.map((tag) => (
            <button 
            className={`form__tag ${selectedTags.includes(tag) && 'form__tag--active'} ${tagClassName}`} 
            key={tag}
            onClick={() => setSelectedTags(...selectedTags, tag)}
            >
              {tag}
              </button>
        ))}
    </div>
  )
}
