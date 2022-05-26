
const api = "https://testing.mytreety.com"


// get all categories
export const getAllCategories = () =>
  fetch(`${api}/api/v2/categories`)
    .then(res => res.json())
    .then(data => data.categories)

// get specific category
export const getCategory = (categoryId) =>
  fetch(`${api}/api/v2/sub-categories${categoryId}`)
    .then(res => res.json())
    .then(data => data.category)

// get all products best seller
export const getAllBestSeller = () =>
  fetch(`${api}/api/v2/products/best-seller`)
    .then(res => res.json())
    .then(data => data.BestSeller)

// get all charities
export const getAllCharities = () =>
  fetch(`${api}/api/v2/charities`)
    .then(res => res.json())
    .then(data => data.charities)

// Get all sustainability   

export const getAllSustainabilities = () =>
  fetch(`${api}/api/v2/sustainabilities`)
    .then(res => res.json())
    .then(data => data.sustainabilities)

    