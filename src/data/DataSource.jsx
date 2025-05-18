const reviews = [
    {
        userId: 1,
        userName: 'Jakir Hussen',
        content: 'Great product, I love this Coffee Beans',
        ratting: 5,
        avatar: './src/assets/img/avatar/avatar-1.jpg'
    },
    {
        userId: 2,
        userName: 'Jubed Ahmed',
        content: 'Awesome Coffee, I love this Coffee Beans',
        ratting: 3.5,
        avatar: './src/assets/img/avatar/avatar-2.jpg'
    },
    {
        userId: 3,
        userName: 'Delwar Hussain',
        content: 'Great product, I love this Coffee Beans',
        ratting: 4,
        avatar: './src/assets/img/avatar/avatar-3.jpg'
    },
]

const rating = reviews.length > 0 ? (reviews.reduce((sum, value) => sum + value.ratting, 0) / reviews.length).toFixed(1) : 0;

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

const listCategories = [
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
export const dataSrc = {
    product: {
        id: '',
        category: '',
        name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
        rating,
        images: [
            './src/assets/img/product/product-1.png',
            './src/assets/img/product/product-2.png',
            './src/assets/img/product/product-3.png',
            './src/assets/img/product/product-4.png',
        ],
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
                    <img src="./assets/img/product/product-1.png" alt="" />
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
                    <img src="./src/assets/img/product/product-1.png" alt="" />
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

    },
    listProducts,
    listCategories,
}
