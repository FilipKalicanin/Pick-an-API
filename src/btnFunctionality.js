import { all } from "./index";

export function btnClear() {
  let searchContent = document.querySelector("#searchBar");

  if (searchContent.value !== "") {
    searchContent.value = "";
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    all.displayCategories();
  } else {
    searchContent.value = "";
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
  }
}
