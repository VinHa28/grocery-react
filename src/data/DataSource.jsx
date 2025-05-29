import product1 from 'assets/img/product/product-1.png';
import product2 from 'assets/img/product/product-2.png';
import product3 from 'assets/img/product/product-3.png';
import product4 from 'assets/img/product/product-4.png';

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
        product1,
        product2,
        product3,
        product4,
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



const beauty = {
    title: 'Beauty',
    columnPerGroup: [2, 2, 1, 1],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-15-1.svg',
            iconCate: '../src/assets/img/category/cate-15-2.svg',
            heading: 'Featured Shops',
            items: ['Pickup Today in Beauty', 'BeautySpaceNK', 'Equate Beauty', 'Beauty Deals',
                'Walmart Exclusives', 'Luxury Beauty Deals', 'New Arrivals']
        },
        {
            iconShape: '../src/assets/img/category/cate-16-1.svg',
            iconCate: '../src/assets/img/category/cate-16-2.svg',
            heading: 'Trending in Beauty',
            items: ['Trending Beauty Products', 'Celebrate Earth Day', 'Prom-ready Beauty', 'Summer Beauty', 'Travel Size & Minis']
        },
        {
            iconShape: '../src/assets/img/category/cate-17-1.svg',
            iconCate: '../src/assets/img/category/cate-17-2.svg',
            heading: 'Featured Brands',
            items: ['Shop All', 'New in Bakery', 'Sliced Bread', 'Rolls & Buns', 'Tortillas', 'Breakfast Breads', 'Pies', 'Cookies & Brownies']
        },
        {
            iconShape: '../src/assets/img/category/cate-18-1.svg',
            iconCate: '../src/assets/img/category/cate-18-2.svg',
            heading: 'Communities to Support',
            items: ['Black Owned Beauty', 'LatinX Owned Beauty', 'AAPI Owned Beauty']
        },
        {
            iconShape: '../src/assets/img/category/cate-19-1.svg',
            iconCate: '../src/assets/img/category/cate-19-2.svg',
            heading: 'Premium Beauty',
            items: ['Shop All', 'Hair Color', 'Hair Care', 'Skincare', 'Fragrance', 'Makeup', 'Beauty Tech & Tools']
        },
        {
            iconShape: '../src/assets/img/category/cate-20-1.svg',
            iconCate: '../src/assets/img/category/cate-20-2.svg',
            heading: 'Beauty',
            items: ['Shop All', 'Men\'s Grooming', 'Bath & Body', 'Beauty Tech & Tools',
                'Makeup', 'Fragrance', 'Nail Care', 'Hair Care', 'Hair Color', 'Skincare']
        }
    ],
}

const groceries = {
    title: 'Groceries',
    columnPerGroup: [2, 2, 2, 2],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-7-1.svg',
            iconCate: '../src/assets/img/category/cate-7-2.svg',
            heading: 'Grocery',
            items: ['Shop All', 'Grilling Foods', 'Spring Flavors']
        },
        {
            iconShape: '../src/assets/img/category/cate-8-1.svg',
            iconCate: '../src/assets/img/category/cate-8-2.svg',
            heading: 'Fresh Produce',
            items: ['Shop All', 'Celebrate Salad Month', 'Healthy Living', 'Fresh Flowers', 'Chilled Dressing', 'Fresh Fruit',
                'Salad Kits & Bowls', 'Organic Produce', 'Fresh Vegetables']
        },
        {
            iconShape: '../src/assets/img/category/cate-9-1.svg',
            iconCate: '../src/assets/img/category/cate-9-2.svg',
            heading: 'Bakery & Bread',
            items: ['Shop All', 'New in Bakery', 'Sliced Bread', 'Rolls & Buns', 'Tortillas', 'Breakfast Breads', 'Pies', 'Cookies & Brownies']
        },
        {
            iconShape: '../src/assets/img/category/cate-10-1.svg',
            iconCate: '../src/assets/img/category/cate-10-2.svg',
            heading: 'Frozen',
            items: ['Frozen Breakfast', 'Frozen Potatoes', 'Frozen Meals & Snacks']
        },
        {
            iconShape: '../src/assets/img/category/cate-11-1.svg',
            iconCate: '../src/assets/img/category/cate-11-2.svg',
            heading: 'Snacks',
            items: ['Shop All', 'Chips', 'Popcorn & Pretzels', 'Crackers', 'Salsa & Dips']
        },
        {
            iconShape: '../src/assets/img/category/cate-12-1.svg',
            iconCate: '../src/assets/img/category/cate-12-2.svg',
            heading: 'Candy',
            items: ['Shop All', 'Better for You', 'Chocolate', 'Sugar Free Candy', 'Gum', 'Mints', 'On-the-Go']
        },
        {
            iconShape: '../src/assets/img/category/cate-13-1.svg',
            iconCate: '../src/assets/img/category/cate-13-2.svg',
            heading: 'Cocktails & Mixes Coffee',
            items: ['Ground Coffee', 'Whole Bean Coffee', 'Coffee Pods', 'Instant Coffee']
        },
        {
            iconShape: '../src/assets/img/category/cate-14-1.svg',
            iconCate: '../src/assets/img/category/cate-14-2.svg',
            heading: 'Beverages',
            items: ['Shop All', 'Water', 'Soft Drinks', 'Fruit Juice', 'Sports Drinks', 'Energy Drinks', 'Tea', 'Hot Chocolate & Cocoa']
        }
    ],
}

const savingsAndFeaturedShops = {
    title: 'Saving And Featured Shop',
    columnPerGroup: [2, 1, 2],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-3-1.svg',
            iconCate: '../src/assets/img/category/cate-3-2.svg',
            heading: 'Fashion Deals',
            items: ['Clothing', 'Shoes', 'Accessories', 'Bags', 'Jewelry']
        },
        {
            iconShape: '../src/assets/img/category/cate-6-1.svg',
            iconCate: '../src/assets/img/category/cate-6-2.svg',
            heading: 'Electronics Discounts',
            items: ['Smartphones', 'Laptops', 'Headphones', 'Cameras', 'Tablets', 'Speakers', 'Wearable Tech']
        },
        {
            iconShape: '../src/assets/img/category/cate-2-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Home & Living Specials',
            items: [
                'Furniture', 'Kitchenware', 'Decor', 'Bedding', 'Appliances',
                'Lighting', 'Bathroom', 'Storage', 'Outdoor Furniture', 'Home Office', 'Cleaning Supplies'
            ]
        },
        {
            iconShape: '../src/assets/img/category/cate-5-1.svg',
            iconCate: '../src/assets/img/category/cate-5-2.svg',
            heading: 'Beauty Bargains',
            items: ['Skincare', 'Makeup', 'Haircare', 'Fragrances', 'Nail Care', 'Beauty Tools', "Men's Grooming"]
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-4-2.svg',
            heading: 'Sports & Outdoors Deals',
            items: ['Fitness Equipment', 'Outdoor Gear', 'Sportswear', 'Camping', 'Biking']
        }
    ],
}

const electronics = {
    title: 'Electronics',
    columnPerGroup: [2, 1, 2],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-2-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'TV & Video',
            items: ['Shop all TVs', 'TVs by Size', 'Smart TVs', 'Roku TVs', 'Streaming', 'TV Mounts & Accessories', 'DVD & Blu-Ray Players']
        },
        {
            iconShape: '../src/assets/img/category/cate-3-1.svg',
            iconCate: '../src/assets/img/category/cate-3-2.svg',
            heading: 'Wearable Technology',
            items: ['Galaxy Watch', 'Apple Watch', 'Fitness Trackers', 'Virtual Reality', 'Headphones']
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-4-2.svg',
            heading: 'Computers',
            items: ['Shop All Computers', 'Laptops', 'PC Gaming', 'Monitors', 'Chromebook', 'Printers & Ink', 'Shop all TVs',
                'Computer Accessories', 'Desktops', 'Tax Software', 'Computer Software', 'PC Finder']
        },
        {
            iconShape: '../src/assets/img/category/cate-5-1.svg',
            iconCate: '../src/assets/img/category/cate-5-2.svg',
            heading: 'Savings',
            items: ['Tech Savings', 'Overstock Savings', 'Tech Rollbacks']
        },
        {
            iconShape: '../src/assets/img/category/cate-6-1.svg',
            iconCate: '../src/assets/img/category/cate-6-2.svg',
            heading: 'Cell Phones',
            items: ['Wireless Deals', '5G Phones', 'Prepaid Phones & Plans', 'Refurbished Phones', 'iPhone Accessories',
                'Cases & Screen Protectors', 'Walmart Protection Plan', 'Unlocked Phones']
        }
    ],
}

const clothingShoesAccessories = {
    title: 'Clothing, Shoes & Accessories',
    columnPerGroup: [2, 2, 1],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-6-1.svg',
            iconCate: '../src/assets/img/category/cate-6-2.svg',
            heading: "Men's Clothing",
            items: ['Casual Shirts', 'Formal Suits', 'Jeans & Pants', 'Outerwear', 'T-Shirts']
        },
        {
            iconShape: '../src/assets/img/category/cate-5-1.svg',
            iconCate: '../src/assets/img/category/cate-5-2.svg',
            heading: "Women's Clothing",
            items: ['Dresses', 'Skirts', 'Blouses & Tops', 'Handbags', 'Coats & Jackets']
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-4-2.svg',
            heading: 'Footwear',
            items: ["Men's Shoes", "Women's Shoes", "Kids' Shoes", 'Sneakers', 'Boots', 'Sandals']
        },
        {
            iconShape: '../src/assets/img/category/cate-3-1.svg',
            iconCate: '../src/assets/img/category/cate-3-2.svg',
            heading: 'Fashion Accessories',
            items: ['Belts', 'Hats & Caps', 'Scarves', 'Gloves', 'Sunglasses', 'Watches']
        },
        {
            iconShape: '../src/assets/img/category/cate-2-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Seasonal Specials',
            items: ['Winter Wear', 'Summer Outfits', 'Rain Gear', 'Holiday Collection', 'Gift Sets']
        }
    ]
};

const homeFurnitureAppliances = {
    title: 'Home, Furniture & Appliances',
    columnPerGroup: [2, 1, 2],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-5-1.svg',
            iconCate: '../src/assets/img/category/cate-5-2.svg',
            heading: 'Living Room',
            items: ['Sofa Sets', 'Coffee Tables', 'TV Units', 'Book Shelves', 'Wall Decor']
        },
        {
            iconShape: '../src/assets/img/category/cate-6-1.svg',
            iconCate: '../src/assets/img/category/cate-6-2.svg',
            heading: 'Bedroom',
            items: ['Beds', 'Wardrobes', 'Dressing Tables', 'Nightstands', 'Mattresses']
        },
        {
            iconShape: '../src/assets/img/category/cate-3-1.svg',
            iconCate: '../src/assets/img/category/cate-3-2.svg',
            heading: 'Kitchen Appliances',
            items: ['Microwave Ovens', 'Dishwashers', 'Gas Stoves', 'Refrigerators', 'Blenders']
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-4-2.svg',
            heading: 'Home Decor',
            items: ['Wall Art', 'Vases', 'Light Fixtures', 'Curtains', 'Carpets']
        },
        {
            iconShape: '../src/assets/img/category/cate-2-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Office Furniture',
            items: ['Office Chairs', 'Desks', 'Cabinets', 'Meeting Tables', 'Bookcases']
        }
    ]
}

const toysAndVideoGames = {
    title: 'Toys & Video Games',
    columnPerGroup: [2, 2, 1],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-5-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Action Figures',
            items: ['Superheroes', 'Anime Figures', 'Movie Characters', 'Collectibles', 'Robots']
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-3-2.svg',
            heading: 'Educational Toys',
            items: ['STEM Kits', 'Puzzles', 'Books', 'Art Supplies', 'Learning Tablets']
        },
        {
            iconShape: '../src/assets/img/category/cate-6-1.svg',
            iconCate: '../src/assets/img/category/cate-5-2.svg',
            heading: 'Dolls & Plush',
            items: ['Fashion Dolls', 'Animal Plush', 'Character Dolls', 'Interactive Dolls', 'Collectibles']
        },
        {
            iconShape: '../src/assets/img/category/cate-3-1.svg',
            iconCate: '../src/assets/img/category/cate-5-2.svg',
            heading: 'Video Games',
            items: ['Console Games', 'PC Games', 'Mobile Games', 'Virtual Reality', 'Game Accessories']
        },
        {
            iconShape: '../src/assets/img/category/cate-2-1.svg',
            iconCate: '../src/assets/img/category/cate-5-2.svg',
            heading: 'Outdoor Toys',
            items: ['Ride-Ons', 'Scooters', 'Bicycles', 'Sports Gear', 'Swimming Pools']
        }
    ]
}

const homeImprovement = {
    title: 'Home Improvement',
    columnPerGroup: [1, 2, 2],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-1-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Bathroom Upgrades',
            items: ['Shower Heads', 'Vanity Units', 'Bath Tubs', 'Tile Options', 'Bathroom Lighting', 'Cabinet Designs', 'Countertops', 'Kitchen Islands', 'Backsplash Options', 'Appliance Upgrades']
        },
        {
            iconShape: '../src/assets/img/category/cate-3-1.svg',
            iconCate: '../src/assets/img/category/cate-3-2.svg',
            heading: 'Flooring Solutions',
            items: ['Hardwood Flooring', 'Tile Flooring', 'Laminate Options', 'Carpet Choices', 'Vinyl Flooring']
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-4-2.svg',
            heading: 'Paint & Wallpaper',
            items: ['Wall Paints', 'Primers', 'Wallpapers', 'Stencils', 'Paint Brushes']
        },
        {
            iconShape: '../src/assets/img/category/cate-5-1.svg',
            iconCate: '../src/assets/img/category/cate-5-2.svg',
            heading: 'Outdoor Improvements',
            items: ['Deck Designs', 'Patio Ideas', 'Landscaping', 'Garden Decor', 'Outdoor Lighting']
        },
        {
            iconShape: '../src/assets/img/category/cate-2-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Lighting & Fixtures',
            items: ['Ceiling Lights', 'Wall Lamps', 'Outdoor Lights', 'Chandeliers', 'Table Lamps']
        }
    ]
}

const baby = {
    title: 'Baby',
    columnPerGroup: [1, 1, 1],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-1-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Baby Clothing',
            items: ['Newborn Essentials', 'Onesies', 'Sleepwear', 'Outerwear', 'Accessories']
        },
        {
            iconShape: '../src/assets/img/category/cate-3-1.svg',
            iconCate: '../src/assets/img/category/cate-3-2.svg',
            heading: 'Baby Care',
            items: ['Diapers', 'Wipes', 'Feeding Bottles', 'Baby Toiletries', 'Health & Safety']
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-4-2.svg',
            heading: 'Baby Gear',
            items: ['Strollers', 'Car Seats', 'Cribs', 'High Chairs', 'Baby Carriers']
        }
    ]
}

const householdEssentials = {
    title: 'Household Essentials',
    columnPerGroup: [1, 1, 1],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-1-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Cleaning Supplies',
            items: ['Laundry Detergents', 'Cleaning Solutions', 'Trash Bags', 'Paper Towels', 'Sponges & Scrubbers']
        },
        {
            iconShape: '../src/assets/img/category/cate-3-1.svg',
            iconCate: '../src/assets/img/category/cate-3-2.svg',
            heading: 'Storage & Organization',
            items: ['Storage Containers', 'Hangers', 'Closet Organizers', 'Kitchen Storage', 'Drawer Dividers']
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-4-2.svg',
            heading: 'Home Maintenance',
            items: ['Light Bulbs', 'Batteries', 'Extension Cords', 'Tools', 'Home Repair']
        }
    ]
}

const personalCare = {
    title: 'Personal Care',
    columnPerGroup: [1, 1, 1],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-1-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Skincare',
            items: ['Face Moisturizers', 'Cleansers', 'Serums', 'Face Masks', 'Sunscreen']
        },
        {
            iconShape: '../src/assets/img/category/cate-3-1.svg',
            iconCate: '../src/assets/img/category/cate-3-2.svg',
            heading: 'Hair Care',
            items: ['Shampoo', 'Conditioner', 'Hair Styling', 'Hair Treatments', 'Hair Accessories']
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-4-2.svg',
            heading: 'Body Care',
            items: ['Body Lotion', 'Body Wash', 'Deodorant', 'Hand Cream', 'Body Scrubs']
        }
    ]
}

const patioGarden = {
    title: 'Patio & Garden',
    columnPerGroup: [1, 2, 1],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-1-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Outdoor Furniture',
            items: ['Patio Sets', 'Outdoor Chairs', 'Outdoor Tables', 'Hammocks', 'Umbrellas']
        },
        {
            iconShape: '../src/assets/img/category/cate-5-1.svg',
            iconCate: '../src/assets/img/category/cate-5-2.svg',
            heading: 'Garden Supplies',
            items: ['Plants', 'Gardening Tools', 'Planters', 'Seeds', 'Fertilizers']
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-4-2.svg',
            heading: 'Outdoor Decor',
            items: ['Garden Statues', 'Wind Chimes', 'Bird Feeders', 'Outdoor Rugs', 'Garden Lighting']
        }
    ]
};

const sportsOutdoors = {
    title: 'Sports & Outdoors',
    columnPerGroup: [2, 1, 2],
    columns: [
        {
            iconShape: '../src/assets/img/category/cate-2-1.svg',
            iconCate: '../src/assets/img/category/cate-2-2.svg',
            heading: 'Team Sports',
            items: [
                'Football',
                'Basketball',
                'Soccer',
                'Baseball',
                'Volleyball'
            ]
        },
        {
            iconShape: '../src/assets/img/category/cate-3-1.svg',
            iconCate: '../src/assets/img/category/cate-3-2.svg',
            heading: 'Outdoor Gear',
            items: [
                'Camping',
                'Hiking',
                'Fishing',
                'Hunting',
                'Cycling'
            ]
        },
        {
            iconShape: '../src/assets/img/category/cate-4-1.svg',
            iconCate: '../src/assets/img/category/cate-4-2.svg',
            heading: 'Fitness Equipment',
            items: [
                'Weights',
                'Fitness Machines',
                'Exercise Bikes',
                'Treadmills',
                'Yoga Equipment'
            ]
        },
        {
            iconShape: '../src/assets/img/category/cate-5-1.svg',
            iconCate: '../src/assets/img/category/cate-5-2.svg',
            heading: 'Outdoor Gear',
            items: [
                'Camping',
                'Hiking',
                'Fishing',
                'Hunting',
                'Cycling'
            ]
        }
    ]
};

const giftCards = {
    title: "Gift Cards",
    columnPerGroup: [2, 1, 1],
    columns: [
        {
            iconShape: "../src/assets/img/category/cate-5-1.svg",
            iconCate: "../src/assets/img/category/cate-5-2.svg",
            heading: "Popular Gift Cards",
            items: [
                "Amazon",
                "Target",
                "Walmart",
                "Best Buy",
                "Starbucks"
            ]
        },
        {
            iconShape: "../src/assets/img/category/cate-6-1.svg",
            iconCate: "../src/assets/img/category/cate-6-2.svg",
            heading: "Popular Gift Cards",
            items: [
                "Amazon",
                "Target",
                "Walmart",
                "Best Buy",
                "Starbucks"
            ]
        },
        {
            iconShape: "../src/assets/img/category/cate-3-1.svg",
            iconCate: "../src/assets/img/category/cate-3-2.svg",
            heading: "Digital Gift Cards",
            items: [
                "Netflix",
                "iTunes",
                "Google Play",
                "Xbox",
                "PlayStation"
            ]
        },
        {
            iconShape: "../src/assets/img/category/cate-4-1.svg",
            iconCate: "../src/assets/img/category/cate-4-2.svg",
            heading: "Restaurant & Retail",
            items: [
                "Olive Garden",
                "Red Lobster",
                "Nike",
                "Macy's",
                "Home Depot"
            ]
        }
    ]
};

const autoTiresIndustrial = {
    title: "Auto, Tires and Industrial",
    columnPerGroup: [1, 1, 2],
    columns: [
        {
            iconShape: "../src/assets/img/category/cate-5-1.svg",
            iconCate: "../src/assets/img/category/cate-5-2.svg",
            heading: "Auto Parts",
            items: [
                "Brakes",
                "Batteries",
                "Oil & Fluids",
                "Filters",
                "Lighting"
            ]
        },
        {
            iconShape: "../src/assets/img/category/cate-3-1.svg",
            iconCate: "../src/assets/img/category/cate-3-2.svg",
            heading: "Tires",
            items: [
                "Car Tires",
                "Truck Tires",
                "SUV Tires",
                "Tire Services",
                "Wheel Alignment"
            ]
        },
        {
            iconShape: "../src/assets/img/category/cate-4-1.svg",
            iconCate: "../src/assets/img/category/cate-4-2.svg",
            heading: "Industrial Supplies",
            items: [
                "Tools",
                "Safety Equipment",
                "Welding Supplies",
                "Electrical Supplies",
                "Plumbing"
            ]
        },
        {
            iconShape: "../src/assets/img/category/cate-2-1.svg",
            iconCate: "../src/assets/img/category/cate-2-2.svg",
            heading: "Tires",
            items: [
                "Car Tires",
                "Truck Tires",
                "SUV Tires",
                "Tire Services",
                "Wheel Alignment"
            ]
        }
    ]
};

const moviesMusicBooks = {
    title: "Movies, Music & Books",
    columnPerGroup: [2, 2, 1],
    columns: [
        {
            iconShape: "../src/assets/img/category/cate-2-1.svg",
            iconCate: "../src/assets/img/category/cate-2-2.svg",
            heading: "Movies",
            items: [
                "New Releases",
                "Action & Adventure",
                "Comedy",
                "Drama",
                "Documentaries",
            ],
        },
        {
            iconShape: "../src/assets/img/category/cate-3-1.svg",
            iconCate: "../src/assets/img/category/cate-3-2.svg",
            heading: "Music",
            items: [
                "New Albums",
                "Pop",
                "Rock",
                "Jazz & Blues",
                "Classical",
            ],
        },
        {
            iconShape: "../src/assets/img/category/cate-4-1.svg",
            iconCate: "../src/assets/img/category/cate-4-2.svg",
            heading: "Books",
            items: [
                "Fiction",
                "Non-Fiction",
                "Children's Books",
                "Biographies",
                "Science & Technology",
            ],
        },
        {
            iconShape: "../src/assets/img/category/cate-5-1.svg",
            iconCate: "../src/assets/img/category/cate-5-2.svg",
            heading: "Audiobooks & eBooks",
            items: [
                "Audiobooks",
                "eBooks",
                "Subscriptions",
                "Best Sellers",
                "New Arrivals",
            ],
        },
        {
            iconShape: "../src/assets/img/category/cate-6-1.svg",
            iconCate: "../src/assets/img/category/cate-6-2.svg",
            heading: "Accessories & Merchandise",
            items: [
                "Movie Posters",
                "Vinyl Records",
                "Music Merchandise",
                "Bookmarks",
                "Collectibles",
            ],
        },
    ]
};

const departments = [
    beauty,
    groceries,
    savingsAndFeaturedShops,
    electronics,
    clothingShoesAccessories,
    homeFurnitureAppliances,
    toysAndVideoGames,
    homeImprovement,
    baby,
    householdEssentials,
    personalCare,
    patioGarden,
    sportsOutdoors,
    giftCards,
    autoTiresIndustrial,
    moviesMusicBooks,
];

const provinces = [
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cần Thơ",
    "Cao Bằng",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Nội",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "TP Hồ Chí Minh",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái"
];

export const dataSrc = {
    product,
    listProducts,
    listCategories,
    cartList,
    listAddress,
    user,
    departments,
    beauty,
    groceries,
    provinces,
}


