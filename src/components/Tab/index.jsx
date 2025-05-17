import React, { useState } from 'react'
import './Tab.scss';

/**
 * Tab Component có thể tái sử dụng
 * @param {Object} props
 * @param {Array} props.items - Mảng các tab items, mỗi item có cấu trúc { title: string, content: ReactNode }
 * @param {number} props.defaultActiveTab - Index của tab mặc định được active (bắt đầu từ 0)
 * @param {string} props.className - Class name tùy chỉnh cho component
 */

export default function Tab({ items, defaultActiveTab = 0, className = '' }) {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className={`product-tab ${className}`}>
            <ul className='product-tab__list'>
                {items.map((items, index) => (
                    <li
                        className={`product-tab__item ${activeTab === index ? 'product-tab__item--active' : ''}`}
                        key={`tab-${index}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {items.title}
                    </li>
                ))}
            </ul>

            <div className="product-tab__contents">
                {items.map((item, index) => (
                    <div
                        key={`content-${index}`}
                        className={`product-tab__content ${activeTab === index ? 'product-tab__content--active' : ''}`}
                    >
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    )
}
