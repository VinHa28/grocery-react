import React from 'react'
import './DetailPage.scss';
import BreadCrumbs from '../../components/BreadCrumbs'
import SearchBar from '../../components/SearchBar'
import ProductPreview from '../../components/ProductPreview';
import ProductInfo from '../../components/ProductInfo';
import Tab from '../../components/Tab';
import TextContent from '../../TextContent';
import { dataSrc } from '../../data/DataSource';

const product = dataSrc.product;

const tabItems = [
  {
    title: 'Description',
    content: (
      <div className="product-content">
        <div className='row'>
          <div className='col-8 offset-2 col-xl-10 offset-xl-1 col-lg-12 offset-lg-0'>
            <TextContent description={dataSrc.product.description}/>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Review (1100)',
    content: (
      <div className="product-content">
        Review
      </div>
    )
  },
  {
    title: 'Similar',
    content: (
      <div className="product-content">
        Similar
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
              <ProductInfo></ProductInfo>
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
