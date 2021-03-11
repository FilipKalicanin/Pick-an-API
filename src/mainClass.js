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
    this.filtered;
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
  }

  setFiltered(param) {
    this.filtered = param;
  }

  getAllLinks(filtered, e) {
    if (filtered !== null) {
      let filteredCategoriesAfterSearch = this.links.filter(el => {
        if (el.API.toLowerCase().includes(e.target.value.toLowerCase())) {
          return el;
        }
      })
      return filteredCategoriesAfterSearch;
    } else {
      let filteredCategoriesAfterSearch = this.links.filter(el => {
        if (el.API.toLowerCase().includes(e.target.value.toLowerCase())) {
          return el;
        }
      })
      return filteredCategoriesAfterSearch;
    }
  }

  // CATEGORIES

  collectAllCategories() {
    getAllCategories().then((res) => {
      this.transformCategories(res);
      this.onReceivedCategories();
    });
  }

  searchCategories(e) {
    let filteredCategoriesAfterSearch = this.categories.filter(el => {
      if (el.name.toLowerCase().includes(e.target.value.toLowerCase())) {
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

  collectAllLinks() {
    getData().then(res => {
      this.links = res;
      this.onReceivedLinks();
      this.transformLink();
    })
  }

  searchAllLinks(e) {
    let filteredLinksAfterSearch = this.links.filter(el => {
      if (el.API.toLowerCase().includes(e.target.value.toLowerCase())) {
        return el;
      }
    })
    return filteredLinksAfterSearch;
  }

  displayLinks(category) {
    getData(category).then((res) => {
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

