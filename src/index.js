import { displayCategoryLink, searchCategory, searchLinks } from "./displayUI";
import { instanceOfMainClass } from './mainClass';
import { transform } from './transform';

instanceOfMainClass.allCategories = searchCategory;
instanceOfMainClass.searchThroughLinks = searchLinks;
instanceOfMainClass.linksUpdate = displayCategoryLink;
instanceOfMainClass.transformLinks = transform;

// Initial call of method displayCategories() in order to fill this.categories;
instanceOfMainClass.collectAllCategories();
// Initial call of method collectAllLinks() in order to fill this.links;
instanceOfMainClass.collectAllLinks();