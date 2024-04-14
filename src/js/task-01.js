const listOfCat = document.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCat.length}`);

listOfCat.forEach(category => {
  console.log(`Category : ${category.firstElementChild.innerText}`);

  const element = category.querySelectorAll('li').length;
  console.log(`Elements: ${element}`);
});
