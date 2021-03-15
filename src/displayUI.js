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
    instanceOfMainClass.markAsImportant(categoryElement);
  })

  category.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    let firstWord = categoryElement.name;
    let parameter = firstWord.split(" ")[0];
    instanceOfMainClass.collectAllLinks(parameter);
    instanceOfMainClass.setTextFilter(parameter);
    selectedCategoryDisplay(firstWord);
    markAsImportantStyle(category);
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

  chosenCategoryDiv.append(chosenCategory, chosenCategoryBtn);
  document.querySelector('#chosenCategorySearch').appendChild(chosenCategoryDiv);

  chosenCategoryBtn.addEventListener('click', e => {
    e.preventDefault();
    btnClear();
    btnClearLinks();
    chosenCategoryBtn.parentElement.remove();
  })
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

function markAsImportantStyle(el) {
  el.classList.add('category-main-chosen');
}

//Search through Categories and display them
export function searchCategory() {
  const searchBar = document.querySelector("#searchBar");

  displayAllCategories();

  searchBar.addEventListener("input", (e) => {
    e.preventDefault();
    let targetValue = e.target.value.toLowerCase();
    document.querySelector("#categories").innerHTML = "";

    instanceOfMainClass.searchCategories(targetValue).forEach(el => {
      displayOneCategory(el);
    })
  });
}

// Search through Links and display them
export function searchLinks() {
  const searchBarLinks = document.querySelector("#searchBarLinks");

  searchBarLinks.addEventListener("input", (e) => {
    e.preventDefault();
    let targetValue = e.target.value.toLowerCase();
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";

    instanceOfMainClass.getAllLinks(targetValue).forEach(el => {
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
  instanceOfMainClass.collectAllLinks();
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


