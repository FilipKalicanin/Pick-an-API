import { instanceOfMainClass } from './mainClass';

////////////// CATEGORIES ///////////////////////////////////
/////////////////////////////////////////////////////////////

// Display one Category element
export function displayOneCategory(categoryElement) {

  let searchContent = document.querySelector("#searchBar");

  let category = document.createElement('div');
  category.className = 'category-main';
  category.id = categoryElement.name;

  let categoryItem = document.createElement("div");
  categoryItem.textContent = categoryElement.name;
  let elementName = categoryElement.name;

  let categoryItemSvg = document.createElement('div');
  categoryItemSvg.className = "fas fa-star";
  categoryItemSvg.id = `${elementName}Star`;

  if (searchContent.value === '') {
    category.classList.add('fadein-animation');
  }

  if (instanceOfMainClass.selectedCategory && instanceOfMainClass.selectedCategory === categoryElement.name) {
    setStyleSelected(category);
  }

  if (categoryElement.important === true) {
    setStyleMarkedAsImportant(categoryItemSvg);
  }

  categoryItemSvg.addEventListener('click', (e) => {
    e.preventDefault();

    setStyleMarkedAsImportant(categoryItemSvg);

    if (categoryElement.important === false) {
      instanceOfMainClass.setMapOfImportantCategories(categoryElement);
    } else {
      instanceOfMainClass.deleteElementFromMapOfImportantCategories(categoryElement);
    }
  })

  category.addEventListener("click", (e) => {
    e.preventDefault();

    if (document.getElementById(instanceOfMainClass.selectedCategory)) {
      reverseStyleSelected();
    }

    instanceOfMainClass.setSelectedCategory(categoryElement.name);

    setStyleSelected(category);
    selectedCategoryDisplay(categoryElement);
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    instanceOfMainClass.collectAllLinks();
  });

  category.append(categoryItem, categoryItemSvg);
  document.querySelector("#categories").appendChild(category);
}

// Display which category has been selected (like highlited)
function selectedCategoryDisplay(category) {

  let chosenCategoryDiv = document.createElement('div');
  chosenCategoryDiv.className = 'chosen-category-div';
  chosenCategoryDiv.id = 'chosen-div';

  let chosenCategory = document.createElement('p');
  chosenCategory.id = 'chosenCategory';
  chosenCategory.className = 'chosen-category';
  chosenCategory.textContent = category.name;

  let chosenCategoryBtn = document.createElement('button');
  chosenCategoryBtn.type = 'button';
  chosenCategoryBtn.className = 'chosen-category-btn';
  chosenCategoryBtn.textContent = 'X';

  chosenCategoryBtn.addEventListener('click', e => {
    e.preventDefault();

    document.querySelector('#chosen-div').classList.add('fall');
    document.querySelector('#chosen-div').addEventListener('transitionend', function () {
      chosenCategoryBtn.parentElement.remove();
    });

    reverseStyleSelected();

    document.querySelector('#oneCategoryDisplayBox').innerHTML = '';
    instanceOfMainClass.setSelectedCategory('');
    instanceOfMainClass.collectAllLinks();
  })

  chosenCategoryDiv.append(chosenCategory, chosenCategoryBtn);
  document.querySelector('#displaySelected').innerHTML = "";
  document.querySelector('#displaySelected').appendChild(chosenCategoryDiv);
}

// Render of category elements;
export function renderCategories() {
  instanceOfMainClass.getCategories().forEach((el) => {
    displayOneCategory(el);
  })
}

////////////////////////////////
////////////// LINKS ///////////
////////////////////////////////

// Display of One Link element
export function displayOneLink(link) {
  let individuals = document.createElement("div");
  individuals.className = "display-data";

  let paramSvg = document.createElement('div');
  paramSvg.className = "fas fa-star svg-within-link";

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

  if (link.important === true) {
    setStyleMarkedAsImportant(paramSvg);
  }

  paramSvg.addEventListener('click', (e) => {
    e.preventDefault();

    setStyleMarkedAsImportant(paramSvg);

    if (link.important === false) {
      instanceOfMainClass.setMapOfImportantLinks(link);
    } else {
      instanceOfMainClass.deleteElementFromMapOfImportantLinks(link);
    }

  });

  individuals.append(
    paramSvg,
    paramApi,
    paramCategory,
    paramDescription,
    paramLink
  );
  document.querySelector("#oneCategoryDisplayBox").append(individuals);
}

// Render of all Link elements
export function renderLinks() {
  instanceOfMainClass.getLinks().forEach(link => {
    displayOneLink(link);
  })
}

////////////////////////////////////////
////////////// UTILITIES ///////////////
////////////////////////////////////////
// Buttons, search bars, style functions

export function searchBarCategories() {
  document.querySelector("#searchBar").addEventListener("input", (e) => {
    e.preventDefault();

    instanceOfMainClass.setTextFilterCategories(e.target.value.toLowerCase());
    document.querySelector("#categories").innerHTML = "";
    renderCategories();
  });
}

export function searchBarLinks() {
  document.querySelector("#searchBarLinks").addEventListener("input", (e) => {
    e.preventDefault();

    instanceOfMainClass.setTextFilterLinks(e.target.value.toLowerCase());
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    renderLinks();
  });
}

// btnClear for Category search
export function btnClearCategoriesFilterText() {
  let searchContent = document.querySelector("#searchBar");
  searchContent.value = "";
  document.querySelector("#categories").innerHTML = "";
  instanceOfMainClass.setTextFilterCategories('');
  renderCategories()
}

// Initialization of btnClear for Category
export function btnClearForCategoriesFilterText() {
  let searchBarCategories = document.querySelector('#searchBar');

  document.querySelector("#btnClear").addEventListener("click", (e) => {
    e.preventDefault();
    if (searchBarCategories.value === '') {
      document.querySelector("#btnClear").disabeled = true;
    } else {
      btnClearCategoriesFilterText();
    }
  });
}

// btnClear for Links search
export function btnClearLinksFilterText() {
  let searchContent = document.querySelector("#searchBarLinks");
  searchContent.value = "";
  document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
  instanceOfMainClass.setTextFilterLinks('');
  renderLinks();
}

// Implementation of btnClear for Links
export function btnClearForLinksFilterText() {
  let searchBarLinks = document.querySelector('#searchBarLinks');

  document.querySelector("#btnClearLinks").addEventListener("click", (e) => {
    e.preventDefault();
    if (searchBarLinks.value === '') {
      document.querySelector("#btnClearLinks").disabeled = true;
    } else {
      btnClearLinksFilterText();
    }
  });
}

// Change of STAR color for Mark-As-Important feature
export function setStyleMarkedAsImportant(element) {
  element.classList.toggle('mark-important');
}

// Highlight chosen category
function setStyleSelected(el) {
  el.classList.add('category-main-chosen')
}

// Remove highlight from chosen category
function reverseStyleSelected() {
  if (instanceOfMainClass.selectedCategory !== '') {
    document.getElementById(instanceOfMainClass.selectedCategory).classList.remove('category-main-chosen');
  }
}