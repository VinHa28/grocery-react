import React from 'react'
import './DetailPage.scss';
import BreadCrumbs from '../../components/BreadCrumbs'
import SearchBar from '../../components/SearchBar'
import ProductPreview from '../../components/ProductPreview';
import ProductInfo from '../../components/ProductInfo';

const product = {
  id: '',
  category: '',
  name: '',
  ratting: 5,
  images: [
    './src/assets/img/product/product-1.png',
    './src/assets/img/product/product-2.png',
    './src/assets/img/product/product-3.png',
    './src/assets/img/product/product-4.png',
  ],
  price: 500,
  discount: 0.1,
  isFavored: true,
  review: [
    {
      userId: 1,
      content: 'Great product, I love this Coffee Beans',
      ratting: 5,
    },
    {
      userId: 2,
      content: 'Awesome Coffee, I love this Coffee Beans',
      ratting: 3.5,
    },
    {
      userId: 3,
      content: 'Great product, I love this Coffee Beans',
      ratting: 4,
    },
  ]
};

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
                <ProductInfo></ProductInfo>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}
