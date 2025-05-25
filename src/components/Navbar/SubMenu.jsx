import React from 'react'
import './Navbar.scss'
import SubMenuColumn from './SubMenuColumn';

export default function SubMenu({
    className ='sub-menu--not-main', 
    data=[],
    columnPerGroup = [2, 2, 1, 1],
}) {
    let start =0;
  return (
    <div className={`sub-menu ${className}`}>
        {columnPerGroup.map((count, index) => {
            const group = data.slice(start, start + count);
            start += count

            if (group.length === 0)return null;
            
            return (
                <SubMenuColumn columns={group} key={index}/>
            )
        })}
    </div>
  )
}
