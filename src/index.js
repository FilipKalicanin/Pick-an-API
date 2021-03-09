import { instanceOfMainClass } from './mainClass';
import { searchCategory, searchLinks, displayLinksForChosenCategory, searchChosenLinksOnly } from "./displayUI";

instanceOfMainClass.searchThroughCategories = searchCategory;
instanceOfMainClass.searchThroughLinks = searchLinks;
instanceOfMainClass.displayChosenLinks = displayLinksForChosenCategory;
instanceOfMainClass.searchOfChosenLinks = searchChosenLinksOnly;

// instanceOfMainClass.setData(searchLinks, searchCategory, displayLinksForChosenCategory);

// Initial call of method displayCategories() in order to fill and transform this.categories;
instanceOfMainClass.collectAllCategories();
// Initial call of method collectAllLinks() in order to fill and transform this.links;
instanceOfMainClass.collectAllLinks();