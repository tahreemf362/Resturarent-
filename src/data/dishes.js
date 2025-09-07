// Example dishes data
import burger1 from '../assets/burger1.jpg';
import pizza from '../assets/pizza.jpg';
import pasta from '../assets/pasta.jpg';

export const DISHES = [
  {
    id: 1,
    title: "Burger Special",
    desc: "Juicy grilled burger with cheese, lettuce, and tomato.",
  price: 500,
    rating: 4.7,
    img: burger1,
    category: "Mains"
  },
  {
    id: 2,
    title: "Margherita Pizza",
    desc: "Classic pizza with tomato sauce, mozzarella, and basil.",
  price: 2000,
    rating: 4.8,
    img: pizza,
    category: "Pizza"
  },
  {
    id: 3,
    title: "Pasta Primavera",
    desc: "Fresh pasta with seasonal vegetables and a light sauce.",
  price: 700,
    rating: 4.6,
    img: pasta,
    category: "Pasta"
  },
  {
    id: 4,
    title: "Greek Salad",
    desc: "Crisp lettuce, tomatoes, cucumbers, olives, and feta cheese.",
    price: 1000,
    rating: 4.5,
    img: pizza, // placeholder, replace with salad image if available
    category: "Salad"
  },
  {
    id: 5,
    title: "Chocolate Cake",
    desc: "Rich chocolate cake with creamy frosting.",
    price: 1000,
    rating: 4.9,
    img: pasta, // placeholder, replace with dessert image if available
    category: "Dessert"
  },
  {
    id: 6,
    title: "Grilled Chicken",
    desc: "Tender grilled chicken breast with herbs.",
    price: 900,
    rating: 4.4,
    img: burger1, // placeholder, replace with chicken image if available
    category: "Mains"
  }
];
