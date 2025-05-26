import React, { useState } from 'react'
import './Form.scss'

export default function FormTag({
  className = '',
  listTags = [],
  tagClassName = '',
}) {
  const [selectedTags, setSelectedTags] = useState([]);
    return (
    <div className={`${className} form__tags`}>
      {listTags.map((tag) => (
        <div
          className={`form__tag ${selectedTags.includes(tag) && 'form__tag--active'} ${tagClassName}`}
          key={tag}
          onClick={() => setSelectedTags(
            selectedTags.includes(tag) ?
              selectedTags.filter(t => t != tag) :
              [...selectedTags, tag]
          )}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}
