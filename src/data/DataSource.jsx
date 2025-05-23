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
        price: 48.00,
    },
    {
        id: '2',
        img: './src/assets/img/product/product-2.png',
        title: 'Nescafe Classic Instant',
        shortDesc: 'Bold and rich flavor',
        rating: 4.2,
        brand: 'Nescafe',
        isFavored: false,
        price: 48.00,
    },
    {
        id: '3',
        img: './src/assets/img/product/product-3.png',
        title: 'Starbucks House Blend',
        shortDesc: 'Balanced with chocolate notes',
        rating: 4.7,
        brand: 'Starbucks',
        isFavored: true,
        price: 49.00,
    },
    {
        id: '4',
        img: './src/assets/img/product/product-4.png',
        title: 'Trung Nguyen G7',
        shortDesc: 'Vietnamese instant coffee',
        rating: 4.3,
        brand: 'Trung Nguyen',
        isFavored: false,
        price: 58.00,
    },
    {
        id: '5',
        img: './src/assets/img/product/product-1.png',
        title: 'Illy Ground Coffee',
        shortDesc: '100% Arabica beans',
        rating: 4.6,
        brand: 'Illy',
        isFavored: true,
        price: 78.00,
    },
    {
        id: '6',
        img: './src/assets/img/product/product-2.png',
        title: 'Tchibo Exclusive',
        shortDesc: 'Smooth and aromatic',
        rating: 4.1,
        brand: 'Tchibo',
        isFavored: false,
        price: 74.00,
    },
    {
        id: '7',
        img: './src/assets/img/product/product-3.png',
        title: 'Dalat Arabica Coffee',
        shortDesc: 'From the highlands of Vietnam',
        rating: 4.4,
        brand: 'Dalat Coffee',
        isFavored: true,
        price: 43.00,
    },
    {
        id: '8',
        img: './src/assets/img/product/product-4.png',
        title: 'Highlands Coffee Roast',
        shortDesc: 'Bold roast, deep flavor',
        rating: 4.0,
        brand: 'Highlands',
        isFavored: false,
        price: 58.00,
    },
    {
        id: '9',
        img: './src/assets/img/product/product-1.png',
        title: 'Buon Ma Thuot Blend',
        shortDesc: 'Vietnam’s coffee heritage',
        rating: 4.3,
        brand: 'BMT Coffee',
        isFavored: true,
        price: 47.00,
    },
    {
        id: '10',
        img: './src/assets/img/product/product-2.png',
        title: 'Vinacafe Instant Mix',
        shortDesc: 'Sweet and creamy taste',
        rating: 4.2,
        brand: 'Vinacafe',
        isFavored: false,
        price: 58.00,
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

const cartList = [
    {
        product: {
            id: 1,
            name: 'Buon Ma Thuot Blend',
            img: './src/assets/img/product/product-1.png',
            price: 500,
            inStock: true,
            isFavored: false,
            brand: 'BMT Coffee',
            shortDesc: 'Vietnam’s coffee heritage',
        },
        quantity: 5,
    },
    {
        product: {
            id: 3,
            name: 'Vinacafe Instant Mix',
            img: './src/assets/img/product/product-2.png',
            price: 106,
            inStock: true,
            isFavored: false,
            brand: 'Vinacafe',
            shortDesc: 'Sweet and creamy taste',
        },
        quantity: 1,
    },
    {
        product: {
            id: 5,
            name: 'Highlands Coffee Roast',
            img: './src/assets/img/product/product-4.png',
            price: 38.65,
            inStock: true,
            isFavored: true,
            brand: 'Highlands',
            shortDesc: 'Bold roast, deep flavor',
        },
        quantity: 7,
    }
]

const listAddress = [
    {
        receiver: 'Ha Van Vinh',
        address: 'FPT University, Hoa Lac High-Tech Park, Thach That, Hanoi, Vietnam.',
        selected: true,
    },
    {
        receiver: 'Vinh Ha Van',
        address: 'Xuan Giang Commune, Soc Son District, Hanoi, Vietnam',
        selected: false,
    }
]
const product = {
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

}

const user = {
    firstName: 'Vinh',
    lastName: 'Ha Van',
    phoneNumber: '0981228204',
    email: 'vinhhv28@gmail.com',
    address: 'Soc Son District, Hanoi, Vietnam',
    avatar: '../src/assets/img/avatar.JPG',
    cards: [
        {
            id: 1,
            type: 'FeatherCard',
            number: '1234 4567 8901 2221',
            cardHolder: 'Vinh Ha Van',
            expired: '10/22',
            bgColor: '#1E2E69',
            img: '../src/assets/img/card/air-plane.svg',
        },
        {
            id: 2,
            type: 'FeatherCard',
            number: '1234 4567 8901 2221',
            cardHolder: 'Vinh Ha Van',
            expired: '07/28',
            bgColor: '#354151',
            img: '../src/assets/img/card/leaf.svg',
        }
    ],
    favoriteList: listProducts.filter((item) => item.id % 3 == 0),
}
export const dataSrc = {
    product,
    listProducts,
    listCategories,
    cartList,
    listAddress,
    user
}
