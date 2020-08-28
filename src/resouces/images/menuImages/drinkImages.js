import menu1 from './menu-1.jpg';
import menu2 from './menu-2.jpg';
import menu3 from './menu-3.jpg';
import menu4 from './menu-4.jpg';
import menu5 from './menu-5.jpg';
import menu6 from './menu-6.jpg';
function randomDate(start, end) {
  var d = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
function randomNumber() {
  return Math.floor(Math.random() * 1000);
}
const drinkImg = [
  {
    src: menu1,
    alt: 'HOT CAKE HONEY',
    title: 'HOT CAKE HONEY',
    price: '$2.90',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
  {
    src: menu2,
    alt: 'HOT CAKE HONEY',
    title: 'HOT CAKE HONEY',
    price: '$2.90',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
  {
    src: menu3,
    alt: 'HOT CAKE HONEY',
    title: 'HOT CAKE HONEY',
    price: '$2.90',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
  {
    src: menu4,
    alt: 'HOT CAKE HONEY',
    title: 'HOT CAKE HONEY',
    price: '$2.90',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
  {
    src: menu5,
    alt: 'HOT CAKE HONEY',
    title: 'HOT CAKE HONEY',
    price: '$2.90',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
  {
    src: menu6,
    alt: 'HOT CAKE HONEY',
    title: 'HOT CAKE HONEY',
    price: '$2.90',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
];

export default drinkImg;
