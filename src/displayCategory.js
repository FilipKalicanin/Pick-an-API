import { displayOne } from './displayOne';

// Display of all categories on page
export function updateUI_categoryPage(arr) {
  arr.forEach((el) => {
    displayOne(el, arr);
  });
}
