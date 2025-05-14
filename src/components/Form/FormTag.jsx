import React from 'react'
import './Form.scss'

export default function FormTag({
    className='',
    listTags =[],
    tagClassName ='',
}) {
  return (
    <div className={`form__tags ${className}`}>
        {listTags.map((tag) => (
            <button className={`form__tag ${tagClassName}`}>{tag}</button>
        ))}
    </div>
  )
}
