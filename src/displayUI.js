import { instanceOfMainClass } from './mainClass';

// Display one Category element
export function displayOneCategory(categoryElement) {
  let category = document.createElement('div');
  category.className = 'category-main';

  let categoryItem = document.createElement("div");
  categoryItem.textContent = categoryElement.name;
  categoryItem.id = "categoryItem";

  let categoryItemSvg = document.createElement('div');
  categoryItemSvg.className = "fas fa-star";

  categoryItemSvg.addEventListener('click', (e) => {
    e.preventDefault();
    changeColor(categoryItemSvg);
  })

  categoryItem.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    let firstWord = categoryElement.name;
    let parameter = firstWord.split(" ")[0];
    instanceOfMainClass.displayLinks(parameter);
  });

  category.append(categoryItem, categoryItemSvg)
  document.querySelector("#categories").appendChild(category);
}

// Display of all categories elements 
export function displayAllCategories() {
  instanceOfMainClass.categories.forEach((el) => {
    displayOneCategory(el, instanceOfMainClass);
  });
}

// Display of One Link element
export function displayOneLink(link) {
  let individuals = document.createElement("div");
  individuals.className = "display-data";

  let param_svg = document.createElement('div');
  param_svg.className = "fas fa-star svg-within-link";

  param_svg.addEventListener('click', (e) => {
    e.preventDefault();
    changeColor(param_svg);
  })

  let param_api = document.createElement("p");
  param_api.className = "display-data-p";
  param_api.textContent = `API: ${link.API}`;

  let param_category = document.createElement("p");
  param_category.className = "display-data-p";
  param_category.textContent = `Category: ${link.Category}`;

  let param_description = document.createElement("p");
  param_description.className = "display-data-p";
  param_description.textContent = `Description: ${link.Description}`;

  let param_link = document.createElement("a");
  param_link.className = "display-data-p";
  param_link.href = link.Link;
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

// Display of all Link elements
export function displayLinksForChosenCategory(arrayOfLinks) {
  arrayOfLinks.forEach(link => {
    displayOneLink(link);
  })
}

// Change of color for Mark-As-Important feature
function changeColor(el) {
  el.classList.toggle('mark-important');
}

//Search through Categories and display them
export function searchCategory() {
  const searchBar = document.querySelector("#searchBar");

  displayAllCategories();

  searchBar.addEventListener("input", (e) => {
    e.preventDefault();
    document.querySelector("#categories").innerHTML = "";

    instanceOfMainClass.searchCategories(e).forEach(el => {
      displayOneCategory(el);
    })
  });
}

// Search through Links and display them
export function searchLinks() {
  const searchBarLinks = document.querySelector("#searchBarLinks");

  searchBarLinks.addEventListener("input", (e) => {
    e.preventDefault();
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";

    instanceOfMainClass.searchLinks(e).forEach(el => {
      displayOneLink(el);
    })
  });
}

//btnClear for Category search
export function btnClear() {
  let searchContent = document.querySelector("#searchBar");
  searchContent.value = "";
  document.querySelector("#categories").innerHTML = "";
  displayAllCategories();
}

//btnClear for Links search
export function btnClearLinks() {
  let searchContent = document.querySelector("#searchBarLinks");
  searchContent.value = "";
  document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
}

// initialization of btnClear for Category
document.querySelector("#btnClear").addEventListener("click", (e) => {
  e.preventDefault();
  btnClear();
});

// initialization of btnClear for Links
document.querySelector("#btnClearLinks").addEventListener("click", (e) => {
  e.preventDefault();
  btnClearLinks();
});

