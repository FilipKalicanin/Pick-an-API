//Create function to do getData(category) and and getAllLinks() based on paremeter

export function getData(category) {

  if (category) {
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

  if (category === null || category === undefined) {
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
}

export function getAllCategories() {
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
