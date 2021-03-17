import { getData, getAllCategories } from "./source";

export class AllItems {

  constructor(renderCategories, renderLinks) {
    // categories, search functionality
    this.categories = [];
    this.onReceivedCategories = renderCategories;
    // links, search functionality and initial display when app starts
    this.links = [];
    this.onReceivedLinks = renderLinks;
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
  }

  setTextFilterLinks(param) {
    this.textFilterLinks = param;
  }

  setTextFilterCategories(param) {
    this.textFilterCategories = param;
  }


  // CATEGORIES

  collectAllCategories() {
    getAllCategories().then((res) => {
      this.categories = this.transformCategories(res);
      this.onReceivedCategories();
    });
  }

  getCategories() {
    if (this.textFilterCategories) {
      let filteredCategoriesAfterSearch = this.categories.filter(el => {
        if (el.name.toLowerCase().includes(this.textFilterCategories)) {
          return el;
        }
      })
      return filteredCategoriesAfterSearch;
    } else {
      return this.categories;
    }
  }

  transformCategories(arr) {
    return arr.map(el => {
      return { name: el, important: false };
    })
  }

  // LINKS

  collectAllLinks() {
    getData(this.selectedCategory).then(res => {
      this.links = this.transformLink(res);
      this.onReceivedLinks();
    })
  }

  getLinks() {
    if (this.textFilterLinks) {
      let filteredLinksAfterSearch = this.links.filter(el => {
        if (el.API.toLowerCase().includes(this.textFilterLinks)) {
          return el;
        }
      })
      return filteredLinksAfterSearch;
    } else {
      return this.links;
    }
  }

  transformLink(res) {
    res.forEach(el => {
      el.important = false;
    })
    return res;
  }

  // LocalStorage
  updateStorageLinks() {
    localStorage.setItem('links', JSON.stringify(this.links));
  }

  updateStorageCategories() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }

  markAsImportantCategory(el) {
    if (el.important === false) {
      el.important = true;
    } else {
      el.important = false;
    }
    this.updateStorageCategories();
  }

  markAsImportantLink(el) {
    if (el.important === false) {
      el.important = true;
    } else {
      el.important = false;
    }
    this.updateStorageLinks();
  }
}

let instanceOfMainClass = new AllItems();
export { instanceOfMainClass };

