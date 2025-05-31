import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from 'utils/utils';

import './BreadCrumbs.scss'


export default function BreadCrumbs({
  className = '',
  pathnames = ['departments',
    'coffee',
    'coffee beans']
}) {

  return (
    <ul className={`breadcrumbs ${className}`}>
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;
        return (
          !isLast ? (
            <li key={routeTo}>
              {/* <Link to={routeTo} className="breadcrumbs__link">   */}
              <Link to='#' className="breadcrumbs__link">
                {capitalizeFirstLetter(name)}
                <img src="assets/icons/arrow-right.svg" alt="" />
              </Link>
            </li>) : (
            <li key={routeTo}>
              <Link to={routeTo} className="breadcrumbs__link breadcrumbs__link--current">{capitalizeFirstLetter(name)}</Link>
            </li>))
      })}
    </ul>
  )
}
