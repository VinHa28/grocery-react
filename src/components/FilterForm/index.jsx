import React, { useState } from 'react'
import './FilterForm.scss'
import FormTag from '../Form/FormTag'
import Button from '../Button'
import InputRange from './InputRange'
import FormSelectGroup from '../Form/FormSelectGroup'
import { FormSelect } from '../Form'

export default function FilterForm() {
  const [open, setOpen] = useState(false);
  return (
    <div className="filter-wrap">
      <div className="filter-btn" onClick={() => setOpen(!open)}>
        Filter
        <img src="../src/assets/icons/filter.svg" alt="icon" className="filter-btn__icon icon" />
      </div>
      <div className={`filter ${open ? 'show' : 'hide'}`} id="home-filter">
        <img src="../src/assets/icons/arrow-up.png" alt="" className="filter__arrow" />
        <form action="" className="filter__form form">
          <h3 className="filter__heading">Filter</h3>
          <div className="filter__row filter__content">

            <InputRange
              label='Price ($)'
              min='0'
              max='200'
              minValueDefault={30}
              maxValueDefault={100}

            />
            <div className="filter__separate"></div>

            <div className="filter__col">
              <label htmlFor="" className="form__label">Size/Weight</label>

              <div className="filter__form-group">
                <FormSelectGroup>
                  <FormSelect options={[500, 600, 700]} style={{ '--width': '157px', }} defaultValue='500' />
                  <FormSelect defaultValue='Gram' options={['Gram', 'Kilogram']} />
                </FormSelectGroup>
              </div>
              <div className="filter__form-group">
                <FormTag listTags={['Small', 'Medium', 'Large']} tagClassName='filter__form-tag'></FormTag>
              </div>
            </div>

            <div className="filter__separate"></div>

            <div className="filter__col">
              <label htmlFor="" className="filter__heading form__label">Brand</label>
              <div className="filter__form-group">
                <div className="filter__form-search">
                  <input onChange={() => { }} type="text" className="filter__form-search-input" placeholder="Search brand name" />
                  <img src="../src/assets/icons/search.svg" alt="" className="filter__form-serach-icon icon" />
                </div>
              </div>
              <div className="filter__form-group">
                <FormTag listTags={['Lavazza', 'Nescafe', 'Starbucks']} tagClassName='filter__form-tag'></FormTag>
              </div>
            </div>
          </div>

          <div className="filter__row filter__footer">
            <Button className="filter__cancel btn--text" onClick={() => setOpen(false)}>Cancel</Button>
            <Button className="filter__submit btn--primary">Show Result</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
