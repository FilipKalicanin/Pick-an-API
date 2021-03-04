export function getData(category) {
  return fetch(`https://api.publicapis.org/entries?category=${category}`)
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

export function getAllLinks() {
  return fetch(`https://api.publicapis.org/entries`)
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
