import listProducts from './listProduct';
import Avatar from 'img/avatar.JPG';
import AirPlaneIcon from 'img/card/air-plane.svg';
import LeafIcon from 'img/card/leaf.svg';

const user = {
    firstName: "Vinh",
    lastName: "Ha Van",
    phoneNumber: "0981228204",
    email: "vinhhv28@gmail.com",
    address: "Soc Son District, Hanoi, Vietnam",
    avatar: Avatar,
    cards: [
        {
            id: 1,
            type: "FeatherCard",
            number: "1234 4567 8901 2221",
            cardHolder: "Vinh Ha Van",
            expired: "10/22",
            bgColor: "#1E2E69",
            img: AirPlaneIcon,
        },
        {
            id: 2,
            type: "FeatherCard",
            number: "1234 4567 8901 2221",
            cardHolder: "Vinh Ha Van",
            expired: "07/28",
            bgColor: "#354151",
            img: LeafIcon,
        },
    ],
    favoriteList: listProducts.filter((item) => item.id % 3 == 0),
};

export default user;