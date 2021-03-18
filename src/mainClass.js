import { getData, getAllCategories } from "./source";

export class AllItems {

  constructor(onReceivedCategories, onReceivedLinks) {
    // categories
    this.categories = [];
    this.onReceivedCategories = onReceivedCategories;
    // links
    this.links = [];
    this.onReceivedLinks = onReceivedLinks;
    // textFilter used for searchTabs and selectedCategory used for displaying links of certain category
    this.textFilterLinks = '';
    this.textFilterCategories = '';
    this.selectedCategory = '';
    // localStorage
    this.categoriesStorage = JSON.parse(localStorage.getItem('categories'));
    this.linksStorage = JSON.parse(localStorage.getItem('links'));
  }

  // Set
  setOnCategoriesReceived(onReceivedCategories) {
    this.onReceivedCategories = onReceivedCategories
  }

  setOnLinksReceived(onReceivedLinks) {
    this.onReceivedLinks = onReceivedLinks;
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

  // called initially when page loads
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

  // called initially when page loads
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

  // localStorage - Categories
  markAsImportantCategory(el) {
    if (el.important === false) {
      el.important = true;
    } else {
      el.important = false;
    }
    this.updateStorageCategories(el.name, el.important);
  }

  updateStorageCategories(id, value) {
    this.categoriesStorage.setItem('categories', JSON.stringify([id, value]));
  }

  // localStorage - Links
  markAsImportantLink(el) {
    if (el.important === false) {
      el.important = true;
    } else {
      el.important = false;
    }
    this.updateStorageLinks(el.API, el.important);
  }

  updateStorageLinks(id, value) {
    this.linksStorage.setItem('links', JSON.stringify([id, value]));
  }
}

let instanceOfMainClass = new AllItems();
export { instanceOfMainClass };

