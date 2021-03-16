import { getData, getCategories } from "./source";

export class AllItems {

  constructor(searchCategory, searchLinks, displayLinksForChosenCategory) {
    // categories, search functionality
    this.categories = [];
    this.onReceivedCategories = searchCategory;
    // links, search functionality and initial display when app starts
    this.links = [];
    this.onReceivedLinks = searchLinks;
    this.displayChosenLinks = displayLinksForChosenCategory;
    // localStorage
    this.storageLinks = JSON.parse(localStorage.getItem('links'));
    this.storageCategories = JSON.parse(localStorage.getItem('categories'));
    // used for search
    this.textFilter;
  }

  // Set

  setOnCategoriesReceived(onReceivedCategories) {
    this.onReceivedCategories = onReceivedCategories
  }

  setOnLinksReceived(onReceivedLinks) {
    this.onReceivedLinks = onReceivedLinks;
  }

  setDisplayChosenLinks(displayChosenLinks) {
    this.displayChosenLinks = displayChosenLinks;
  }

  // Update localStorage functionality

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

  // Track changes based on input in searchBar
  setTextFilter(param) {
    this.textFilter = param;
  }

  // SEARCH CATEGORIES

  getAllCategories(targetValue) {
    let filteredCategoriesAfterSearch = this.categories.filter(el => {
      if (el.name.toLowerCase().includes(targetValue)) {
        return el;
      }
    })
    return filteredCategoriesAfterSearch;
  }

  // SEARCH LINKS

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
    getCategories().then((res) => {
      this.transformCategories(res);
      this.onReceivedCategories();
    });
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

  transformLink() {
    this.links.forEach(el => {
      el.important = false;
    })
  }
}

let instanceOfMainClass = new AllItems();
export { instanceOfMainClass };

