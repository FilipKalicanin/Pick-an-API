import { displayOneCategory } from "./displayUI";
import { displayAllCategories } from "./displayUI";
import { singletonInstance } from './mainClass';

singletonInstance;
//Search tab functionality
export function searchCategory() {
  const searchBar = document.querySelector("#searchBar");

  displayAllCategories(singletonInstance);

  searchBar.addEventListener("input", (e) => {
    e.preventDefault();
    document.querySelector("#categories").innerHTML = "";
    singletonInstance.categories.forEach((el) => {
      if (el.toLowerCase().includes(e.target.value.toLowerCase())) {
        displayOneCategory(el, singletonInstance);
      }
    });
  });
}
