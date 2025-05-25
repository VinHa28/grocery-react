import React from 'react'
import './Button.scss'
import { useTheme } from '../../context/ThemeContext';

export default function ThemeButton({ className = '' }) {
    const { isDark, toggleTheme } = useTheme();
    return (
        <div className={`theme-btn ${className}`} id="switch-theme-btn" onClick={toggleTheme}>
            <label htmlFor="theme-checkbox" className="theme-btn__label">
                <img src="../src/assets/icons/moon.svg" alt="" className="theme-btn__icon" />
                <img src="../src/assets/icons/sun-light.svg" alt="" className="theme-btn__icon--sun theme-btn__icon" />
            </label>
        </div>
    )
}
