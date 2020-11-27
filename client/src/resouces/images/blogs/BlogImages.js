import blogImg1 from './image_1.jpg';
import blogImg2 from './image_2.jpg';
import blogImg3 from './image_3.jpg';
import blogImg4 from './image_4.jpg';
import blogImg5 from './image_5.jpg';
import blogImg6 from './image_6.jpg';

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
const BlogImages = [
  {
    src: blogImg1,
    title: 'Coffee Testing Day',
    content:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
  {
    src: blogImg2,
    title: 'Coffee Testing Day',
    content:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
  {
    src: blogImg3,
    title: 'Coffee Testing Day',
    content:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
  {
    src: blogImg4,
    title: 'Coffee Testing Day',
    content:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
  {
    src: blogImg5,
    title: 'Coffee Testing Day',
    content:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
  {
    src: blogImg6,
    title: 'Coffee Testing Day',
    content:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: randomDate(new Date(2019, 0, 1), new Date()),
    admin: 'admin',
    comments: randomNumber(),
  },
];
export default BlogImages;
