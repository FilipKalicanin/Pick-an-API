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
    this.mapOfImportantCategories = JSON.parse(localStorage.getItem('importantCategories')) || {};
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
      if (this.mapOfImportantCategories[el]) {
        return { name: el, important: true }
      } else {
        return { name: el, important: false };
      }
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

  ///////////////////////////////
  // localStorage - Categories //
  ///////////////////////////////

  toggleImportantCategory(el) {
    if (el.important === false) {
      el.important = true;
    } else {
      el.important = false;
    }
  }

  updateStorageCategories() {
    localStorage.setItem('importantCategories', JSON.stringify(this.mapOfImportantCategories));
  }

  setMapOfImportantCategories(element) {
    this.toggleImportantCategory(element);
    this.mapOfImportantCategories[element.name] = element.important;
    this.updateStorageCategories();
  }

  deleteElementFromMapOfImportantCategories(element) {
    this.toggleImportantCategory(element);
    delete this.mapOfImportantCategories[element.name];
    this.updateStorageCategories();
  }

  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  // localStorage - Links
  markAsImportantLink(el) {
    if (el.important === false) {
      el.important = true;
    } else {
      el.important = false;
    }
  }

  updateStorageLinks(id, value) {
    localStorage.setItem('links', JSON.stringify([id, value]));
  }

  checkIfMarkedLinks() {
    this.links.forEach(element => {
      if (this.linksStorage.key(element.name)) {
        element.important = true;
      }
    })
  }

}

let instanceOfMainClass = new AllItems();
export { instanceOfMainClass };

