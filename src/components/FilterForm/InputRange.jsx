import React, { useState } from 'react'
import './FilterForm.scss'
import { FormLabel } from '../Form'

export default function InputRange({
    label = 'Price ($)',
    min = '0',
    max = '100',
    minValueLabel = 'Minimum',
    maxValueLabel = 'Maximum',
    minName = 'minimum',
    maxName = 'maximum',
    minValueDefault,
    maxValueDefault,
}) {
    const [minValue, setMinValue] = useState(minValueDefault || min);
    const [maxValue, setMaxValue] = useState(maxValueDefault || max);
    const gap = (max - min) * 5 / 100;
    return (
        <div className="filter__col">
            <FormLabel htmlFor='' label='Price ($)' />
            <div className="filter__form-group">
                <div className="filter__form-slider">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={minValue}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value + gap <= maxValue) {
                                setMinValue(value)
                            }
                        }}
                        className="filter__range min"

                    />

                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={maxValue}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value - gap >= minValue) {
                                setMaxValue(value);
                            }
                        }}
                        className="filter__range max"
                    />

                </div>
            </div>
            <div className="filter__form-group filter__form-group--horizontal">
                <div>
                    <FormLabel
                        htmlFor={minName}
                        label={minValueLabel}
                        className="filter__form-label form__label--small"
                    />

                    <input
                        type="number"
                        name={minName}
                        id={minName}
                        className="filter__form-input"
                        value={minValue}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (!isNaN(value) && value <= maxValue) {
                                setMinValue(value);
                            }
                        }}
                    />
                </div>
                <div>
                    <FormLabel
                        htmlFor={maxName}
                        label={maxValueLabel}
                        className="filter__form-label form__label--small"
                    />
                    <input
                        value={maxValue}
                        type="number"
                        name={maxName}
                        id={maxName}
                        className="filter__form-input"
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (!isNaN(value) && value >= minValue) {
                                setMaxValue(value);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
