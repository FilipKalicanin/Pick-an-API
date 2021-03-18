import { instanceOfMainClass } from './mainClass';
import { renderCategories, renderLinks, searchBarCategories, searchBarLinks, btnClearForCategories, btnClearForLinks } from "./displayUI";

instanceOfMainClass.setOnCategoriesReceived(renderCategories);
instanceOfMainClass.setOnLinksReceived(renderLinks);

// Initial call of method displayCategories() in order to fill and transform this.categories;
instanceOfMainClass.collectAllCategories();
// Initial call of method collectAllLinks() in order to fill and transform this.links;
instanceOfMainClass.collectAllLinks();

// initialization of btnClear for Category
document.querySelector("#btnClear").addEventListener("click", (e) => {
e.preventDefault();
btnClearForCategories();
});

// initialization of btnClear for Links
document.querySelector("#btnClearLinks").addEventListener("click", (e) => {
e.preventDefault();
btnClearForLinks();
});

searchBarCategories();
searchBarLinks();
btnClearForCategories();
btnClearForLinks();