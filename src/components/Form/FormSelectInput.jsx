import React, { useEffect, useRef, useState } from 'react'
import './Form.scss'
import { dataSrc } from '../../data/DataSource'
import { data } from 'react-router-dom';

const removeDiacritics = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export default function FormSelectInput({
    name = '',
    type = 'text',
    placeholder = '',
    id = '',
    className = '',
    options = [],
    defaultValue,
}) {
    const searchInputRef = useRef(null);
    const wrapperRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue || '');
    const [search, setSearch] = useState('');


    const handleClose = () => {
        setOpen(false);
        setSearch('');
    }

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            handleClose();
        }
    };

    const handleClickOption = (value) => {
        setSelected(value);
        handleClose();
    }

    const filtered = options.filter((item) => removeDiacritics(item).includes(removeDiacritics(search)))

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (open && searchInputRef.current) {
            setTimeout(() => {
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }, 10);
        }
    }, [open]);

    return (
        <div className={`form__text-input ${className}`} ref={wrapperRef}>
            <input
                type={type}
                name={name}
                id={id}
                className="form__input"
                placeholder={placeholder}
                readOnly
                value={selected}
                onFocus={() => {
                    setOpen(true);
                    setSearch('');
                }}
            />
            {/* Form options here */}
            <div className={`form__select-dialog ${open ? 'show' : 'hide'}`} id="city-dialog">
                <h2 className="form__dialog-heading d-none d-sm-block">City/District/Town</h2>

                <button
                    className="form__close-dialog d-none d-sm-block"
                    onClick={handleClose}
                    type="button"
                >
                    &times;
                </button>

                <div className="form__search">
                    <input
                        ref={searchInputRef}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className="form__search-input"
                        placeholder="Search"
                        value={search}
                    />
                    <img src="../src/assets/icons/search.svg" alt="" className="form__search-icon icon" />
                </div>

                <ul className="form__options-list">
                    {filtered.length === 0 && <li className='form__option' style={{ fontStyle: 'italic' }}>No options matched</li>}
                    {filtered.map((item, index) => (
                        <li
                            key={index}
                            className={`form__option ${item === selected ? 'form__option--current' : ''}`}
                            onClick={() => handleClickOption(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
