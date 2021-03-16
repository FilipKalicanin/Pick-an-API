import { getData, getAllCategories } from "./source";

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
    this.textFilterLinks;
    this.textFilterCategories;
    this.selectedCategory;
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

  setSelectedCategory(param) {
    this.selectedCategory = param;
    console.log(this.selectedCategory)
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
  setTextFilterLinks(param) {
    this.textFilterLinks = param;
  }

  setTextFilterCategories(param) {
    this.textFilterCategories = param;
  }

  // SEARCH CATEGORIES

  getCategories() {
    let filteredCategoriesAfterSearch = this.categories.filter(el => {
      if (el.name.toLowerCase().includes(this.textFilterCategories)) {
        return el;
      }
    })
    return filteredCategoriesAfterSearch
  }

  // SEARCH LINKS

  getLinks() {
    let filteredLinksAfterSearch = this.links.filter(el => {
      if (el.API.toLowerCase().includes(this.textFilterLinks)) {
        return el;
      }
    })
    return filteredLinksAfterSearch;
  }

  // CATEGORIES

  collectAllCategories() {
    getAllCategories().then((res) => {
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

  collectAllLinks() {
    getData(this.selectedCategory).then(res => {
      this.displayChosenLinks(res);
      this.links = res;
      this.transformLink();
      this.onReceivedLinks();
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

