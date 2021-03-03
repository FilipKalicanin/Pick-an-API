import { singletonInstance } from './mainClass';

singletonInstance;

// Display one item (element)
export function displayOneCategory(el, singletonInstance) {
  let categoryItem = document.createElement("div");
  categoryItem.textContent = el;
  categoryItem.className = "category-item";
  categoryItem.id = "categoryItem";

  let categoryItemSvg = document.createElement('div');
  categoryItemSvg.className = "fas fa-star";

  categoryItemSvg.addEventListener('click', (e) => {
    e.preventDefault();
    categoryItemSvg.style.color = 'red';
  })
 
  categoryItem.appendChild(categoryItemSvg);

  categoryItem.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    let firstWord = el;
    firstWord.split(" ")[0];
    singletonInstance.displayLinks(firstWord);
  });

  document.querySelector("#categories").appendChild(categoryItem);
}

// Display of all categories on page
export function displayAllCategories(singletonInstance) {
  singletonInstance.categories.forEach((el) => {
    displayOneCategory(el, singletonInstance);
  });
}

// Display of items of chosen category
export function displayCategoryLink(res, category) {

  res.forEach(el => {
    if (category === el.Category) {
      
  let individuals = document.createElement("div");
  individuals.className = "display-data";

  let param_svg = document.createElement('div');
  param_svg.className = "fas fa-star svg-within-link";

  param_svg.addEventListener('click', (e) => {
    e.preventDefault();
    param_svg.style.color = 'red';
  })

  let param_api = document.createElement("p");
  param_api.className = "display-data-p";
  param_api.textContent = `API: ${el.API}`;

  let param_category = document.createElement("p");
  param_category.className = "display-data-p";
  param_category.textContent = `Category: ${el.Category}`;

  let param_description = document.createElement("p");
  param_description.className = "display-data-p";
  param_description.textContent = `Description: ${el.Description}`;

  let param_link = document.createElement("a");
  param_link.className = "display-data-p";
  param_link.href = el.Link;
  param_link.target = "_blank";
  param_link.textContent = "Link to an API webpage";

  individuals.append(
    param_svg,
    param_api,
    param_category,
    param_category,
    param_description,
    param_link
  );

  document.querySelector("#oneCategoryDisplayBox").append(individuals);
    }
  })

}

//btnClear functionality
export function btnClear(singletonInstance) {
  let searchContent = document.querySelector("#searchBar");

  if (searchContent.value !== "") {
    searchContent.value = "";
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    singletonInstance.displayCategories();
  } else {
    searchContent.value = "";
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
  }
}
