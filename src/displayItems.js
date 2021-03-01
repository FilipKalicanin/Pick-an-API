// Display of items of chosen category
export function updateUI_oneCategoryDisplay(el) {
  let individuals = document.createElement("div");
  individuals.className = "display-data";

  let param_api = document.createElement("p");
  param_api.className = "display-data-p";
  param_api.textContent = `API: ${el.API}`;

  let param_category = document.createElement("p");
  param_category.className = "display-data-p";
  param_category.textContent = `Category: ${el.Category}`;

  let param_description = document.createElement("p");
  param_description.className = "display-data-p";
  param_description.textContent = `Description: ${el.Description}`;

  let param_link = document.createElement("a");
  param_link.className = "display-data-p";
  param_link.href = el.Link;
  param_link.target = "_blank";
  param_link.textContent = "Link to an API webpage";

  individuals.append(
    param_api,
    param_category,
    param_category,
    param_description,
    param_link
  );

  document.querySelector("#oneCategoryDisplayBox").append(individuals);
}
