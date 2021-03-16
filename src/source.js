export function getData(category) {

  const categoryQuery = category ? `?category=${category}` : '';

  return fetch(`https://api.publicapis.org/entries${categoryQuery}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status}`);
      } else {
        return res.json();
      }
    })
    .then((res) => {
      return res.entries;
    })
    .catch((er) => {
      console.log(er);
    });
}

export function getCategories() {
  return fetch("https://api.publicapis.org/categories")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status}`);
      } else {
        return res.json();
      }
    })
    .then((res) => {
      return res;
    })
    .catch((er) => {
      console.log(er);
    });
}
