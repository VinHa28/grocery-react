import React from 'react'
import './DetailPage.scss';
import BreadCrumbs from '../../components/BreadCrumbs'
import SearchBar from '../../components/SearchBar'
import ProductPreview from '../../components/ProductPreview';
import ProductInfo from '../../components/ProductInfo';
import Tab from '../../components/Tab';
import { dataSrc } from '../../data/DataSource';
import ReviewCard from '../../components/ReviewCard';
import ProductCard from '../../components/ProductCard';
import TextContent from '../../components/TextContent';

const product = dataSrc.product;

const tabItems = [
  {
    title: 'Description',
    content: (
      <div className='row'>
        <div className='col-8 offset-2 col-xl-10 offset-xl-1 col-lg-12 offset-lg-0'>
          <TextContent description={dataSrc.product.description} />
        </div>
      </div>
    )
  },
  {
    title: `Review (${dataSrc.product.reviews.length})`,
    content: (
      <div className="product-content">
        <div className="row">
          <div className="row row-cols-3 row-cols-md-1 gy-md-3 gx-lg-2">

            {dataSrc.product.reviews.map(review => {
              return (
                <div className="col" key={review.userId} >
                  <ReviewCard reviewerName={review.userName} content={review.content} avatarSrc={review.avatar} rating={review.ratting} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Similar',
    content: (
      <div>
        <div className="product-content">
          <h2 className="product-content__heading">Similar items you might like</h2>
        </div>
        <ul className="row row-cols-5 row-cols-xl-4 row-cols-lg-2 row-cols-sm-1 home__list g-lg-3 g-md-2">
          {dataSrc.listProducts.slice(0, 5).map((product) => (
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
          ))}
        </ul>
      </div>
    )
  }
]

export default function DetailPage() {

  return (
    <main className="product-main">

      <div className='container'>
        <div className="product-container d-md-block d-none">
          <SearchBar></SearchBar>
        </div>
        <div className='product-container'>
          <BreadCrumbs />
        </div>

        <div className='product-container'>
          <div className='row'>
            {/* Media */}
            <div className='col-5 col-xl-6 col-lg-12'>
              <ProductPreview imageList={product.images} />
            </div>
            <div className="col-7 col-xl-6 col-lg-12">
              <ProductInfo product={product}></ProductInfo>
            </div>
          </div>

          <div className='product-container'>
            <Tab items={tabItems} defaultActiveTab={0} />
          </div>
        </div>
      </div>
    </main>

  )
}
