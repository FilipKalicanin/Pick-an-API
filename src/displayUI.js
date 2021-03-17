import { instanceOfMainClass } from './mainClass';

////////////// CATEGORIES ///////////////////////////////////
/////////////////////////////////////////////////////////////

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

  category.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    let firstWord = categoryElement.name;
    let parameter = firstWord.split(" ")[0];
    instanceOfMainClass.setSelectedCategory(parameter);
    selectedCategoryDisplay(firstWord);
    markAsImportantStyle(category);
    instanceOfMainClass.collectAllLinks();
  });
  category.append(categoryItem, categoryItemSvg)
  document.querySelector("#categories").appendChild(category);
}

// Display of all categories elements (Renderer);
export function renderCategories() {
  instanceOfMainClass.getCategories().forEach((el) => {
    displayOneCategory(el);
  });
}

// Show which category has been selected (like highlited)
function selectedCategoryDisplay(category) {

  let chosenCategoryDiv = document.createElement('div');
  chosenCategoryDiv.className = 'chosen-category-div';

  let chosenCategory = document.createElement('p');
  chosenCategory.id = 'chosenCategory';
  chosenCategory.className = 'chosen-category';
  chosenCategory.textContent = category;

  let chosenCategoryBtn = document.createElement('button');
  chosenCategoryBtn.type = 'button';
  chosenCategoryBtn.className = 'chosen-category-btn';
  chosenCategoryBtn.textContent = 'X';

  chosenCategoryBtn.addEventListener('click', e => {
    e.preventDefault();
    btnClear();
    btnClearLinks();
    chosenCategoryBtn.parentElement.remove();
  })

  chosenCategoryDiv.append(chosenCategory, chosenCategoryBtn);
  document.querySelector('#displaySelected').innerHTML = "";
  document.querySelector('#displaySelected').appendChild(chosenCategoryDiv);
}

////////////// LINKS ////////////////////////////////////////
/////////////////////////////////////////////////////////////

// Display of One Link element
export function displayOneLink(link) {
  let individuals = document.createElement("div");
  individuals.className = "display-data";

  let paramSvg = document.createElement('div');
  paramSvg.className = "fas fa-star svg-within-link";

  paramSvg.addEventListener('click', (e) => {
    e.preventDefault();
    changeColor(paramSvg);
    instanceOfMainClass.markAsImportant(link);
  })

  let paramApi = document.createElement("p");
  paramApi.className = "display-data-p";
  paramApi.textContent = `API: ${link.API}`;

  let paramCategory = document.createElement("p");
  paramCategory.className = "display-data-p";
  paramCategory.textContent = `Category: ${link.Category}`;

  let paramDescription = document.createElement("p");
  paramDescription.className = "display-data-p";
  paramDescription.textContent = `Description: ${link.Description}`;

  let paramLink = document.createElement("a");
  paramLink.className = "display-data-p";
  paramLink.href = link.Link;
  paramLink.target = "_blank";
  paramLink.textContent = "Link to an API webpage";

  individuals.append(
    paramSvg,
    paramApi,
    paramCategory,
    paramDescription,
    paramLink
  );
  document.querySelector("#oneCategoryDisplayBox").append(individuals);
}

// Display of all Link elements
export function renderLinks() {
  instanceOfMainClass.getLinks().forEach(link => {
    displayOneLink(link);
  })
}


// OTHER /////////////////////////////////////////////
// Buttons, search bars, style function;

export function searchBarCategories() {
  const searchBar = document.querySelector("#searchBar");

  searchBar.addEventListener("input", (e) => {
    e.preventDefault();
    instanceOfMainClass.setTextFilterCategories(e.target.value.toLowerCase());
    document.querySelector("#categories").innerHTML = "";
    renderCategories();
  });
}

export function searchBarLinks() {
  const searchBarLinks = document.querySelector("#searchBarLinks");

  renderLinks();

  searchBarLinks.addEventListener("input", (e) => {
    e.preventDefault();
    instanceOfMainClass.setTextFilterLinks(e.target.value.toLowerCase());
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    renderLinks();
  });
}

//btnClear for Category search
export function btnClear() {
  let searchContent = document.querySelector("#searchBar");
  searchContent.value = "";
  document.querySelector("#categories").innerHTML = "";
  instanceOfMainClass.setTextFilterCategories('');
  instanceOfMainClass.setSelectedCategory('');
  instanceOfMainClass.collectAllCategories();
}

//btnClear for Links search
export function btnClearLinks() {
  let searchContent = document.querySelector("#searchBarLinks");
  searchContent.value = "";
  document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
  instanceOfMainClass.setTextFilterLinks('');
  instanceOfMainClass.setSelectedCategory('');
  instanceOfMainClass.collectAllLinks();
}

// Change of color for Mark-As-Important feature
function changeColor(el) {
  el.classList.toggle('mark-important');
}

// Highlight chosen category
function markAsImportantStyle(el) {
  el.classList.add('category-main-chosen');
}


