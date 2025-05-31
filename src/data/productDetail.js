import product1 from "img/product/product-1.png";
import product2 from "img/product/product-2.png";
import product3 from "img/product/product-3.png";
import product4 from "img/product/product-4.png";
import avatar_1 from "img/avatar/avatar-1.jpg";
import avatar_2 from "img/avatar/avatar-2.jpg";
import avatar_3 from "img/avatar/avatar-3.jpg";
const reviews = [
    {
        userId: 1,
        userName: "Jakir Hussen",
        content: "Great product, I love this Coffee Beans",
        ratting: 5,
        avatar: avatar_1,
    },
    {
        userId: 2,
        userName: "Jubed Ahmed",
        content: "Awesome Coffee, I love this Coffee Beans",
        ratting: 3.5,
        avatar: avatar_2,
    },
    {
        userId: 3,
        userName: "Delwar Hussain",
        content: "Great product, I love this Coffee Beans",
        ratting: 4,
        avatar: avatar_3,
    },
];

const rating =
    reviews.length > 0
        ? (
            reviews.reduce((sum, value) => sum + value.ratting, 0) /
            reviews.length
        ).toFixed(1)
        : 0;

const product = {
    id: "",
    category: "",
    name: "Coffee Beans - Espresso Arabica and Robusta Beans",
    rating,
    images: [product1, product2, product3, product4],
    price: 500,
    discount: 0.1,
    isFavored: true,
    reviews,
    description: `
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>
                    <a href="#!">Lorem ipsum dolor sit amet</a> consectetur adipisicing elit.
                    Similique consequatur officia mollitia nulla ratione
                    nihil odio illo, placeat fuga. Repudiandae! nihil odio illo, placeat fuga. Repudiandae!nihil odio
                    illo, placeat fuga. Repudiandae!
                </p>

                <h3>Lorem ipsum dolor sit.</h3>
                <p>
                    Lorem <em>ipsum dolor</em> sit amet consectetur adipisicing elit.
                    Similique consequatur officia mollitia nulla ratione
                    nihil odio illo, placeat fuga. Repudiandae! it amet consectetur adipisicing elit.
                    Similique consequatur officia mollitia nulla ratione
                    nihil odio illo, placeat fuga. Repudiandae!
                </p>
                <h3>Lorem ipsum dolor sit.</h3>
                <blockquote>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique consequatur officia mollitia nulla ratione
                        nihil odio illo,<a href="#!">placeat fuga</a>. Repudiandae!
                    </p>
                </blockquote>
                <p>
                    <img src="../src/assets/img/product/product-1.png" alt="" />
                    <em>Lorem ipsum dolor sit amet consectetur adipisicing.</em>
                </p>
                <hr />
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>
                    <u>Lorem ipsum dolor</u> sit amet consectetur adipisicing elit.
                    Similique consequatur officia mollitia nulla ratione
                    nihil odio illo, placeat fuga. Repudiandae! it amet consectetur adipisicing elit.
                    Similique consequatur officia mollitia nulla ratione
                    nihil odio illo, placeat fuga. Repudiandae!
                </p>
                <p>
                    <img src="../src/assets/img/product/product-1.png" alt="" />
                    <em>Lorem ipsum dolor sit amet consectetur adipisicing.</em>
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique consequatur officia mollitia nulla ratione
                    nihil odio illo, placeat fuga. Repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                    Similique consequatur officia mollitia nulla ratione
                    nihil odio illo, placeat fuga. Repudiandae!
                </p>
                `,
};

export default product;