import React from 'react'
import './Navbar.scss'
import MenuColumn from './MenuColumn'

export default function SubMenuColumn({
    columns = [],
    className = '',
}) {

    return (
        <div className={`sub-menu__column ${className}`}>
            {columns.map((column, index) => (
                <MenuColumn
                    key={index}
                    iconShape={column.iconShape}
                    iconCate={column.iconCate}
                    heading={column.heading}
                    items={column.items}
                />
            ))}
        </div>
    )
}
