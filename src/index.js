import { searchCategory } from "./searchBar";
import { displayCategoryLink } from "./displayUI";
import { btnClear } from "./displayUI";
import { singletonInstance } from './mainClass';

singletonInstance.allCategories = searchCategory;
singletonInstance.linksUpdate = displayCategoryLink;
singletonInstance.displayCategories();

document.querySelector("#btnClear").addEventListener("click", (e) => {
  e.preventDefault();
  btnClear(singletonInstance);
});
