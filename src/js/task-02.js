const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.getElementById('ingredients');
ingredients.forEach(item => {
  const li = document.createElement('li');
  li.innerText = item;
  ul.appendChild(li);
});
