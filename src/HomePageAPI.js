
const api = "https://testing.mytreety.com"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'App-Language': 'en',
  'Accept' : 'application/json'
}

// get all products best seller
export const getAllBestSeller = () =>
  fetch(`${api}/api/v2/products/best-seller`,{headers},{ mode: 'no-cors'})
    .then(res => res.json())
    .then(data => data)

// get all charities
// page one
export const getAllCharitiesPageOne = () =>
  fetch(`${api}/api/v2/charities`,{headers},{ mode: 'no-cors'})
    .then(res => res.json())
    .then(data => data)
// page two
export const getAllCharitiesPageTwo = () =>
fetch(`${api}/api/v2/charities?page=2`,{headers},{ mode: 'no-cors'})
  .then(res => res.json())
  .then(data => data)
    
// post the mail  
export const postSubscribe = (email) =>
  fetch(`${api}/api/v2/newsletter/subscribe`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
}).then(res => res.json())
  .then(data => data)






























// get all categories
// export const getAllCategories = () =>
//   fetch(`${api}/api/v2/categories`)
//     .then(res => res.json())
//     .then(data => data.categories)

// get specific category
// export const getCategory = (categoryId) =>
//   fetch(`${api}/api/v2/sub-categories${categoryId}`)
//     .then(res => res.json())
//     .then(data => data.category)

// get all charities
// export const getAllCharities = () =>
//   fetch(`${api}/api/v2/charities`)
//     .then(res => res.json())
//     .then(data => data.charities)

// Get all sustainability   

// export const getAllSustainabilities = () =>
//   fetch(`${api}/api/v2/sustainabilities`)
//     .then(res => res.json())
//     .then(data => data.sustainabilities)
