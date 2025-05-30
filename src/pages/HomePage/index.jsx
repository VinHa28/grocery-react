import { Slideshow, CateItem, ProductCard, FilterForm } from "components";
import { listProducts, listCategories } from "data";

import "./HomePage.scss";

export default function HomePage() {
    return (
        <main className="container home">
            <div className="home__container">
                <Slideshow />
            </div>

            <section className="home__container">
                <h2 className="home__heading">Browse Categories</h2>
                <ul className="home__cate row row-cols-3 row-cols-md-1 home__list">
                    {listCategories.map((item) => {
                        return (
                            <li className="col" key={item.id}>
                                <a href="#!">
                                    <CateItem
                                        img={item.img}
                                        title={item.title}
                                        desc={item.desc}
                                    ></CateItem>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section className="home__container">
                <div className="home__row">
                    <h2 className="home__heading">Total LavAzza 1320</h2>
                    <FilterForm />
                </div>
                <ul className="row row-cols-5 row-cols-lg-2 row-cols-sm-1 home__list g-lg-3 g-md-2">
                    {listProducts.map((product) => {
                        return (
                            <li className="col" key={product.id}>
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
    );
}
