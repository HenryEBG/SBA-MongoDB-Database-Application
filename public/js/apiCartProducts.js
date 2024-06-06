import { cartDisplay } from './display.js';

/**
 * Function that call an API to eliminate an element from the cart
 * and call another API to redraw the cart without the product
 */

async function deleteProduct(event) {
  const deleteAlert = document.getElementById("deleteAlert")
  event.preventDefault()
  console.log("intentando borrar");
  try {
    const response = await fetch(`http://localhost:3005/carts/delete/${event.target.id}?userid=${sessionStorage.getItem("userid")}`,{
      method:"DELETE"
    });
    const data = await response.json();
    deleteAlert.textContent = `The product ${data} was deleted to the cart.`
    deleteAlert.style.display = "block"
    setTimeout(() => {
      deleteAlert.style.display = "none"
    }, 5000)
    const resProducts = await fetch(`http://localhost:3005/carts/products/${sessionStorage.getItem("userid")}`);
    const products = await resProducts.json();
    cartDisplay(products, true)
  } catch (error) {
    console.log(error)
  }
}

/**
 * When the event listener in the productContainer receive a click
 * add a product to the cart or increment the quantity of the product
 */
function addProduct(event) {
  const addAlert = document.getElementById("addAlert")
  event.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  //console.log($_POST['username'])
  const raw = JSON.stringify(
    {
      "id": event.target.id,
      "userid": sessionStorage.getItem("userid")
    }
  );

  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:3005/carts/add", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      //indicate that the product was added
      const addAlertNode = document.getElementById("addAlert")
      addAlertNode.textContent = `The register Number ${event.target.id} was added.`
      addAlertNode.style.display = "block"
      setTimeout(() => {
        addAlertNode.style.display = "none"
      }, 5000)
    }
    )
    .catch((error) => console.error(error));



}

/**
 * Async function that consume a GET API to get all the products of the cart
 */
async function getProducts() {
  const myUser = document.getElementById("user");
  try {
    const response = await fetch(`http://localhost:3005/carts/products/${sessionStorage.getItem("userid")}`);
    const data = await response.json();
    console.log(data)
    cartDisplay(data, true)
  } catch (error) {
    console.log(error)
  }
}

export { addProduct, getProducts,deleteProduct }