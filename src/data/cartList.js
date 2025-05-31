import ProductImg_1 from 'img/product/product-1.png';
import ProductImg_2 from 'img/product/product-2.png';
import ProductImg_4 from 'img/product/product-4.png';

const cartList = [
    {
        product: {
            id: 1,
            name: "Buon Ma Thuot Blend",
            img: ProductImg_1,
            price: 500,
            inStock: true,
            isFavored: false,
            brand: "BMT Coffee",
            shortDesc: "Vietnam’s coffee heritage",
        },
        quantity: 5,
    },
    {
        product: {
            id: 3,
            name: "Vinacafe Instant Mix",
            img: ProductImg_2,
            price: 106,
            inStock: true,
            isFavored: false,
            brand: "Vinacafe",
            shortDesc: "Sweet and creamy taste",
        },
        quantity: 1,
    },
    {
        product: {
            id: 5,
            name: "Highlands Coffee Roast",
            img: ProductImg_4,
            price: 38.65,
            inStock: true,
            isFavored: true,
            brand: "Highlands",
            shortDesc: "Bold roast, deep flavor",
        },
        quantity: 7,
    },
];

export default cartList;
