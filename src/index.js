import { instanceOfMainClass } from './mainClass';
import { searchCategory, searchLinks, displayLinksForChosenCategory } from "./displayUI";

instanceOfMainClass.setOnCategoriesReceived(searchCategory);
instanceOfMainClass.setOnLinksReceived(searchLinks);
instanceOfMainClass.setDisplayChosenLinks(displayLinksForChosenCategory);

// Initial call of method displayCategories() in order to fill and transform this.categories;
instanceOfMainClass.collectAllCategories();
// Initial call of method collectAllLinks() in order to fill and transform this.links;
instanceOfMainClass.collectAllLinks();