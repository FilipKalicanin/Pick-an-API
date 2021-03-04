import { getData, getCategories, getAllLinks } from "./source";

export class AllItems {
  constructor(searchCategory, displayAllLinks, transform, searchLinks) {
    this.allCategories = searchCategory; // searchCategory()
    this.linksUpdate = displayAllLinks; // displayCategoryLink()
    this.transformLinks = transform;
    this.searchThroughLinks = searchLinks;
    this.categories = [];
    this.links = [];
  }

  collectAllLinks() {
    getAllLinks().then(res => {
      this.links = res;
      this.transformLinks();
      this.searchThroughLinks();
    })
  }

  collectAllCategories() {
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

let instanceOfMainClass = new AllItems();
export { instanceOfMainClass };

