import { AllItems } from './mainClass';
import { searchCategory } from './searchBar';
import { updateUI_oneCategoryDisplay } from './displayItems';
import { btnClear } from './btnFunctionality';

export let all = new AllItems(
  searchCategory,
  updateUI_oneCategoryDisplay,
);

all.displayCategories();

let btn = document.querySelector("#btnClear");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  btnClear();
});