import { getData, getCategories } from "./source";

export class AllItems {
  constructor(searchCategory, displayCategoryLink) {
    this.allCategories = searchCategory; // searchCategory()
    this.linksUpdate = displayCategoryLink; // displayCategoryLink()
    this.categories = [];
  }

  displayCategories() {
    getCategories().then((res) => {
      this.categories = res;
      this.allCategories();
    });
  }

  displayLinks(category) {
    getData(category).then((res) => {
     this.linksUpdate(res, category);
    });
  }
}

let singletonInstance = new AllItems();
export { singletonInstance };

