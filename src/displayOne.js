import { all } from './index';

// Display one item (element)
export function displayOne(el) {
  let categoryItem = document.createElement("div");
  categoryItem.textContent = el;
  categoryItem.className = "category-item";
  categoryItem.id = "categoryItem";

  categoryItem.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    let firstWord = el;
    firstWord.split(" ")[0];
    all.getCategoryItems(firstWord);
  });

  document.querySelector("#categories").appendChild(categoryItem);
}
