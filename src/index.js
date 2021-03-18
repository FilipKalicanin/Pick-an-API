import { instanceOfMainClass } from './mainClass';
import { renderCategories, renderLinks, searchBarCategories, searchBarLinks, btnClearForCategoriesFilterText, btnClearForLinksFilterText } from "./displayUI";

instanceOfMainClass.setOnCategoriesReceived(renderCategories);
instanceOfMainClass.setOnLinksReceived(renderLinks);

// Initial call of method displayCategories() in order to fill and transform this.categories;
instanceOfMainClass.collectAllCategories();
// Initial call of method collectAllLinks() in order to fill and transform this.links;
instanceOfMainClass.collectAllLinks();

searchBarCategories();
searchBarLinks();
btnClearForCategoriesFilterText();
btnClearForLinksFilterText();