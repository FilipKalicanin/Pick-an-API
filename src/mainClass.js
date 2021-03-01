import { getData, getCategories } from './source';

export class AllItems {
  constructor(searchCategory, showLinks) {
    this.searchCategory = searchCategory;
    this.showLinks = showLinks;
    this.categories = [];
  }

  displayCategories() {
    getCategories().then((res) => {
      this.categories = res;
      this.searchCategory(this.categories);
    });
  }

  getCategoryItems(category) {
    getData(category).then((res) => {
      res.map((el) => {
        if (category === el.Category) {
          this.showLinks(el);
        }
      });
    });
  }
}

