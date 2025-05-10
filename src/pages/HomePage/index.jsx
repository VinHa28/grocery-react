import React from 'react'
import './HomePage.scss'
import Slideshow from '../../components/Slideshow'
import CateItem from '../../components/CateItem'
import ProductCard from '../../components/ProductCard'

const dataSrc = [
  {
    id: 1,
    img: './src/assets/img/category-item/item-1.png',
    title: '$24 - $150',
    desc: 'New sumatra mandeling coffe blend'
  },
  {
    id: '2',
    img: './src/assets/img/category-item/item-2.png',
    title: '$37 - $160',
    desc: 'Espresso arabica and robusta beans'
  },
  {
    id: '3',
    img: './src/assets/img/category-item/item-3.png',
    title: '$32 - $160',
    desc: 'Lavazza top class whole bean coffee blend'
  },
]

const listProducts = [
  {
    id: '1',
    img: './src/assets/img/product/product-1.png',
    title: 'Lavazza Coffee Blends',
    shortDesc: 'Try the Italian Espresso',
    rating: 4.5,
    brand: 'Lavazza',
    isFavored: true,
  },
  {
    id: '2',
    img: './src/assets/img/product/product-2.png',
    title: 'Nescafe Classic Instant',
    shortDesc: 'Bold and rich flavor',
    rating: 4.2,
    brand: 'Nescafe',
    isFavored: false,
  },
  {
    id: '3',
    img: './src/assets/img/product/product-3.png',
    title: 'Starbucks House Blend',
    shortDesc: 'Balanced with chocolate notes',
    rating: 4.7,
    brand: 'Starbucks',
    isFavored: true,
  },
  {
    id: '4',
    img: './src/assets/img/product/product-4.png',
    title: 'Trung Nguyen G7',
    shortDesc: 'Vietnamese instant coffee',
    rating: 4.3,
    brand: 'Trung Nguyen',
    isFavored: false,
  },
  {
    id: '5',
    img: './src/assets/img/product/product-1.png',
    title: 'Illy Ground Coffee',
    shortDesc: '100% Arabica beans',
    rating: 4.6,
    brand: 'Illy',
    isFavored: true,
  },
  {
    id: '6',
    img: './src/assets/img/product/product-2.png',
    title: 'Tchibo Exclusive',
    shortDesc: 'Smooth and aromatic',
    rating: 4.1,
    brand: 'Tchibo',
    isFavored: false,
  },
  {
    id: '7',
    img: './src/assets/img/product/product-3.png',
    title: 'Dalat Arabica Coffee',
    shortDesc: 'From the highlands of Vietnam',
    rating: 4.4,
    brand: 'Dalat Coffee',
    isFavored: true,
  },
  {
    id: '8',
    img: './src/assets/img/product/product-4.png',
    title: 'Highlands Coffee Roast',
    shortDesc: 'Bold roast, deep flavor',
    rating: 4.0,
    brand: 'Highlands',
    isFavored: false,
  },
  {
    id: '9',
    img: './src/assets/img/product/product-1.png',
    title: 'Buon Ma Thuot Blend',
    shortDesc: 'Vietnam’s coffee heritage',
    rating: 4.3,
    brand: 'BMT Coffee',
    isFavored: true,
  },
  {
    id: '10',
    img: './src/assets/img/product/product-2.png',
    title: 'Vinacafe Instant Mix',
    shortDesc: 'Sweet and creamy taste',
    rating: 4.2,
    brand: 'Vinacafe',
    isFavored: false,
  }
];


export default function HomePage() {
  return (
        <main  className='container home'>
          <div className='home__container'>
            <Slideshow />
          </div>

          <section className='home__container'>
            <h2 className='home__heading'>Browse Categories</h2>
            <ul className="home__cate row row-cols-3 row-cols-md-1 home__list">
              {dataSrc.map((item) => {
                return (
                  <li className="col" key={item.id}>
                    <a href="#!">
                      <CateItem img={item.img} title={item.title} desc={item.desc}></CateItem>
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className='home__container'>
            <div className='home__row'>
              <h2 className='home__heading'>Total LavAzza 1320</h2>
              <div className='filter-wrap'>
                <div className="filter-btn">
                  Filter
                  <img src="./src/assets/icons/filter.svg" alt="icon" className="filter-btn__icon icon" />
                </div>
              </div>
            </div>
            <ul className="row row-cols-5 row-cols-lg-2 row-cols-sm-1 home__list g-lg-3 g-md-2">
              {listProducts.map((product) => {
                return (
                  <li className='col' key={product.id}>
                    <ProductCard
                      img={product.img}
                      title={product.title}
                      brand={product.brand}
                      rating={product.rating}
                      isFavored={product.isFavored}
                      shortDesc={product.shortDesc}
                    />
                  </li>
                );
              })}
            </ul>
          </section>

        </main>
  )
}
