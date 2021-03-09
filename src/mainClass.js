import { getData, getAllCategories } from "./source";

export class AllItems {

  constructor(searchCategory, searchLinks, displayLinksForChosenCategory, searchChosenLinksOnly) {
    this.categories = [];
    this.onReceivedCategories = searchCategory;
    this.displayChosenLinks = displayLinksForChosenCategory;
    this.links = [];
    this.onReceivedLinks = searchLinks;
    this.chosenLinks = [];
    this.onReceivedChosenLinks = searchChosenLinksOnly;
  }

  setOnCategoriesReceived(onReceivedCategories) { 
    this.onReceivedCategories = onReceivedCategories 
  }

  setOnLinksReceived(onReceivedLinks) {
    this.onReceivedLinks = onReceivedLinks;
  }

  setOnChosenLinksReceived(onReceivedChosenLinks) {
    this.onReceivedChosenLinks = onReceivedChosenLinks;
  }

  setDisplayChosenLinks(displayChosenLinks) {
    this.displayChosenLinks = displayChosenLinks;
  }

  // CATEGORIES

  collectAllCategories() {
    getAllCategories().then((res) => {
      //fill this.categories and add mark-as-important feature
      this.transformCategories(res);
      //initialize search option
      this.onReceivedCategories();
    });
  }

  // search functionality for categories; this method is called in displayUI for display
  searchCategories(e) {
    let filteredCategoriesAfterSearch = this.categories.filter(el => {
      if (el.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return el;
      }
    })
    return filteredCategoriesAfterSearch;
  }

  // method that adds "important: false" to category
  transformCategories(arr) {
    this.categories = arr.map(el => {
      return { name: el, important: false };
    })
  }

  // LINKS

  collectAllLinks() {
    getData().then(res => {
      //fill this.links array
      this.links = res;
      //add mark-as-important feature
      this.transformLink();
      //initialize search option
      this.onReceivedLinks();
    })
  }

  // search functionality for Links; this method is called in displayUI for display
  searchAllLinks(e) {
    let filteredLinksAfterSearch = this.links.filter(el => {
      if (el.API.toLowerCase().includes(e.target.value.toLowerCase())) {
        return el;
      }
    })
    return filteredLinksAfterSearch;
  }

  // this method is called within displayUI module
  displayLinks(category) {
    getData(category).then((res) => {
      this.displayChosenLinks(res);
      this.chosenLinks = res;
      this.onReceivedChosenLinks();
    })
  }

  searchChosenLinks(e) {
     let filteredChosenLinksAfterSearch = this.chosenLinks.filter(el => {
      if (el.API.toLowerCase().includes(e.target.value.toLowerCase())) {
        return el;
      }
    })
    return filteredChosenLinksAfterSearch;
  }


  transformLink() {
    this.links.forEach(el => {
      el.important = false;
    })
  }
}

let instanceOfMainClass = new AllItems();
export { instanceOfMainClass };

