import { getData, getAllCategories } from "./source";

export class AllItems {
  setData(searchCategory, searchLinks, displayLinksForChosenCategory) {
    this.searchThroughCategories = searchCategory;
    this.searchThroughLinks = searchLinks;
    this.displayChosenLinks = displayLinksForChosenCategory;
    this.categories = [];
    this.filteredCategoriesAfterSearch = [];
    this.links = [];
    this.filteredLinksAfterSearch = [];
  }

  // CATEGORIES

  collectAllCategories() {
    getAllCategories().then((res) => {
      //fill this.categories and add mark-as-important feature
      this.transformCategories(res);
      //initialize search option
      this.searchThroughCategories();
    });
  }

  // search functionality for categories; this method is called in displayUI for display
  searchCategories(e) {
    this.filteredCategoriesAfterSearch = this.categories.filter(el => {
      if (el.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return el;
      }
    })
    return this.filteredCategoriesAfterSearch;
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
      this.searchThroughLinks();
    })
  }

  // search functionality for Links; this method is called in displayUI for display
  searchLinks(e) {
    this.filteredLinksAfterSearch = this.links.filter(el => {
      if (el.API.toLowerCase().includes(e.target.value.toLowerCase())) {
        return el;
      }
    })
    return this.filteredLinksAfterSearch;
  }

  // this method is called within displayUI module
  displayLinks(category) {
    // Click on specific category will pass category name to this method which will retreive data and display all Links for chosen category
    getData(category).then((res) => {
      this.displayChosenLinks(res);
    });
  }

  transformLink() {
    this.links.forEach(el => {
      el.important = false;
    })
  }
}

let instanceOfMainClass = new AllItems();
export { instanceOfMainClass };

