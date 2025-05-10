import React from 'react'
import './BreadCrumbs.scss'
import { Link, useLocation } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils/utils';

export default function BreadCrumbs() {
  const location = useLocation();
  // const pathnames = location.pathname.split("/").filter((x) => x);

  const pathnames = [
    'departments',
    'coffee',
    'coffee beans'
  ]
  pathnames.map(name => console.log(name))
  return (
    <ul className="breadcrumbs">
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;
        return (
          !isLast ? (
            <li key={routeTo}>
              <Link to={routeTo} className="breadcrumbs__link">
                {capitalizeFirstLetter(name)}
                <img src="./src/assets/icons/arrow-right.svg" alt="" />
              </Link>
            </li>) : (
            <li key={routeTo}>
              <Link to={routeTo} className="breadcrumbs__link breadcrumbs__link--current">{capitalizeFirstLetter(name)}</Link>
            </li>))
      })}
    </ul>
  )
}
