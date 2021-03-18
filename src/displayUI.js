import { instanceOfMainClass } from './mainClass';

////////////// CATEGORIES ///////////////////////////////////
/////////////////////////////////////////////////////////////

// Display one Category element
export function displayOneCategory(categoryElement) {

  let category = document.createElement('div');
  category.className = 'category-main';

  let categoryItem = document.createElement("div");
  categoryItem.textContent = categoryElement.name;
  let firstWord = categoryElement.name;
  let parameter = firstWord.split(" ")[0];
  categoryItem.id = parameter;

  let categoryItemSvg = document.createElement('div');
  categoryItemSvg.className = "fas fa-star";

  categoryItemSvg.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(categoryElement);
    setStyleMarkedAsImportant(categoryItemSvg);
  })

  category.addEventListener("click", (e) => {
    e.preventDefault();

    reverseStyleSelected();

    let firstWord = categoryElement.name;
    let parameter = firstWord.split(" ")[0];

    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    instanceOfMainClass.setSelectedCategory(parameter);
    selectedCategoryDisplay(parameter);
    setStyleSelected(category);
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
  chosenCategoryDiv.id = 'chosen-div';

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
    reverseStyleSelected();
    document.getElementById('chosen-div').classList.add('fall');
    document.getElementById('chosen-div').addEventListener('transitionend', function() {
      chosenCategoryBtn.parentElement.remove();
    });
    document.querySelector('#oneCategoryDisplayBox').innerHTML = '';
    instanceOfMainClass.setSelectedCategory('');
    instanceOfMainClass.collectAllLinks();
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
    console.log(link);
    setStyleMarkedAsImportant(paramSvg);
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
export function btnClearCategoriesFilterText() {
  let searchContent = document.querySelector("#searchBar");
  searchContent.value = "";
  document.querySelector("#categories").innerHTML = "";
  instanceOfMainClass.setTextFilterCategories('');
  instanceOfMainClass.setSelectedCategory('');
  renderCategories();
}

//btnClear for Links search
export function btnClearLinksFilterText() {
  let searchContent = document.querySelector("#searchBarLinks");
  searchContent.value = "";
  document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
  instanceOfMainClass.setTextFilterLinks('');
  renderLinks();
}

// initialization of btnClear for Category
export function btnClearForCategoriesFilterText() {
  document.querySelector("#btnClear").addEventListener("click", (e) => {
    e.preventDefault();
    btnClearCategoriesFilterText();
  });
}

export function btnClearForLinksFilterText() {
  document.querySelector("#btnClearLinks").addEventListener("click", (e) => {
    e.preventDefault();
    btnClearLinksFilterText();
  });
}

// Change of color for Mark-As-Important feature
function setStyleMarkedAsImportant(el) {
  el.classList.toggle('mark-important');
}

// Highlight chosen category
function setStyleSelected(el) {
  el.classList.add('category-main-chosen');
}

function reverseStyleSelected() {
  if (instanceOfMainClass.selectedCategory !== '') {
    document.getElementById(instanceOfMainClass.selectedCategory).parentElement.classList.remove('category-main-chosen');
  }
}


