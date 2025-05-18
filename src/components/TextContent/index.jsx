import React from 'react'
import './TextContent.scss'

export default function TextContent({
    className = '',
    description = '<i>(No content)</i>',
}) {
    return (
        <div className={`text-content ${className}`} dangerouslySetInnerHTML={{ __html: description }}></div> 
    )
}
