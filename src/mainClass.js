import { getData, getAllCategories } from "./source";

export class AllItems {

  constructor(searchCategory, searchLinks, displayLinksForChosenCategory) {
    this.categories = [];
    this.onReceivedCategories = searchCategory;
    this.displayChosenLinks = displayLinksForChosenCategory;
    this.links = [];
    this.onReceivedLinks = searchLinks;
    this.storageLinks = JSON.parse(localStorage.getItem('links'));
    this.storageCategories = JSON.parse(localStorage.getItem('categories'));
    this.textFilter;
  }

  setOnCategoriesReceived(onReceivedCategories) {
    this.onReceivedCategories = onReceivedCategories
  }

  setOnLinksReceived(onReceivedLinks) {
    this.onReceivedLinks = onReceivedLinks;
  }

  setDisplayChosenLinks(displayChosenLinks) {
    this.displayChosenLinks = displayChosenLinks;
  }

  updateStorageLinks() {
    localStorage.setItem('links', JSON.stringify(this.links));
  }

  updateStorageCategories() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }

  markAsImportant(el) {
    if (el.important === false) {
      el.important = true;
    } else {
      el.important = false;
    }
    this.updateStorageCategories();
    this.updateStorageLinks();
  }

  setTextFilter(param) {
    this.textFilter = param;
  }

  getAllLinks(targetValue) {
    if (this.textFilter !== null) {
      let filteredCategoriesAfterSearch = this.links.filter(el => {
        if (el.API.toLowerCase().includes(targetValue)) {
          return el;
        }
      })
      return filteredCategoriesAfterSearch;
    } else {
      return this.links;
    }
  }

  // CATEGORIES

  collectAllCategories() {
    getAllCategories().then((res) => {
      this.transformCategories(res);
      this.onReceivedCategories();
    });
  }

  searchCategories(targetValue) {
    let filteredCategoriesAfterSearch = this.categories.filter(el => {
      if (el.name.toLowerCase().includes(targetValue)) {
        return el;
      }
    })
    return filteredCategoriesAfterSearch;
  }

  transformCategories(arr) {
    this.categories = arr.map(el => {
      return { name: el, important: false };
    })
  }

  // LINKS

  collectAllLinks(category) {
    getData(category).then(res => {
      this.displayChosenLinks(res);
      this.links = res;
      this.onReceivedLinks();
      this.transformLink();
    })
  }

  searchAllLinks(targetValue) {
    let filteredLinksAfterSearch = this.links.filter(el => {
      if (el.API.toLowerCase().includes(targetValue)) {
        return el;
      }
    })
    return filteredLinksAfterSearch;
  }

  transformLink() {
    this.links.forEach(el => {
      el.important = false;
    })
  }
}

let instanceOfMainClass = new AllItems();
export { instanceOfMainClass };

