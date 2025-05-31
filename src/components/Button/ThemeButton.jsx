import "./Button.scss";
import { useTheme } from "../../context/ThemeContext";
import Moon from "assets/icons/moon.svg";
import Sun from "assets/icons/sun-light.svg";

export default function ThemeButton({ className }) {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div
            className={`theme-btn ${className}`}
            id="switch-theme-btn"
            onClick={toggleTheme}
        >
            <label htmlFor="theme-checkbox" className="theme-btn__label">
                <img src={Moon} alt="" className="theme-btn__icon" />
                <img
                    src={Sun}
                    alt=""
                    className="theme-btn__icon--sun theme-btn__icon"
                />
            </label>
        </div>
    );
}
