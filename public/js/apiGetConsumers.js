/**
 * Import the functions insede display.js to show the 
 * products in the container in the index.html
 */
import { productDisplay,categorySelect } from './display.js';



/**
 * Async function that consume a GET API to get all the products
 */
async function getProducts() {
  try {
    const response = await fetch('http://localhost:3005/products/');
    const data = await response.json();
    console.log(data)
    productDisplay(data,true)
  } catch (error) {
    console.log(error)
  }
}

/**
 * Async function that consume a GET API to get all the categories
 */
async function getCategories(){
  try {
    const response = await fetch('http://localhost:3005/categories/');
    const data = await response.json();
    categorySelect(data)
  } catch (error) {
    console.log(error)
  }
}

/**
 * Async funtion that filter the product from a category chosen
 * using a GET API
 * @param {*} event 
 */
async function productsByCategories(event){
  console.log(event.target.value)
  let url='http://localhost:3005/products'
  if(event.target.value!=""){
    url+=`/category/${event.target.value}`
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    productDisplay(data,true)
    //ProductDisplay(newProducts.filter(product => product.category==event.target.value),false)
  } catch (error) {
    console.log(error)
  }
}

//exports functions to the index.js file
export {productsByCategories, getCategories,getProducts}