const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ul = document.querySelector('.gallery');
images.forEach(image => {
  const li = document.createElement('li');
  li.innerHTML = `<img 
                  src = "${image.url}" 
                  alt = "${image.alt}" 
                  height = '300px'
                  width = '600px'/>`;
  ul.appendChild(li);
});

// Add flex-wrap and border dynamically
ul.style.display = 'flex';
ul.style.flexWrap = 'wrap';

const lis = document.querySelectorAll('.gallery li');
lis.forEach(li => {
  li.style.margin = '20px';
  li.style.border = '5px solid #b8b8b8';
});
