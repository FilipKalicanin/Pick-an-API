import { updateUI_categoryPage } from './displayCategory';
import { displayOne } from './displayOne';

//Search tab functionality
export function searchCategory(arr) {
  const searchBar = document.querySelector("#searchBar");

  updateUI_categoryPage(arr);
  console.log('44444');

  searchBar.addEventListener("input", (e) => {
    e.preventDefault();
    document.querySelector("#categories").innerHTML = "";
    arr.filter((el) => {
      if (el.toLowerCase().includes(e.target.value.toLowerCase())) {
        displayOne(el);
      }
    });
  });
}
