# SBA MongoDB  Database Application
## Creating API's consulting Database
## with the use of Mongoose
### Henry Berganza Guevara

A fake store is created using our own server with data inside a MongoDB Database.  Mongoose library is used to manipulate
data from Node.js

The project use modules to refract all the js code and be more easy to read and modify in the future.

## FrontEnd files (nside public folder)

## JS Folder
### scripts.js
It is the principal JS file consulted by the differentes pages.  Include only the calls to the diferent functions to use API's

### apiGetConsumers.js
Exports this functions to the scripts.js file

#### productsByCategories
Call to the API with get method 'http://localhost:3005/products/category/:categoryName'.  This API returns the products filter by a category(categoryName).  In the website it works everytime a category es selected from the select up of the store page.
#### getCategories
Call to the API with get method 'http://localhost:3005/categories/.  This API returns the list of categories and insert that info in the select input in the top of the store page.  This API work automatically when the store page is charged.

#### getProducts
Call to the API with get method 'http://localhost:3005/products/.  This API returns the list of products automatically inside the body of the store page when the store page is charged.

### apiCartProducts.js
Exports this functions to the scripts.js file,  This functions made calls to the API to add, delete or show the products inside the cart collection.

#### addProduct 
This function add a product to the cart of the user(customer) and show a message of the adding product.  Call to the API 
http://localhost:3005/carts/add
This API works with a PATCH method and has to send with the next body.
    {
      "id": 1,
      "userid": 3
    }

#### getProducts
Async function that consume a GET API to get all the products of the cart and it is send with the parameter of the userId to get the cart of this user.  After make the call recieve the array of products and  call a display fuction to show all the products in the cart page.  This function is call everytime the cart page is charge or when a product is deleted.
http://localhost:3005/carts/products/:userid

#### deleteProduct 
Asinc function that consume a DELETE API to eliminate a product or in case the cart is empty the complete cart.
http://localhost:3005/carts/delete/:productid?userid=1


### display.js
Include the functions to display the elements in the store.html file.
- categorySelect  add elements option to the selects inside the modals and the filter in the navbar
- productDisplay add card elements to the principal container in the index.html file to show the products.
- cartDisplay. Function that display products to the carts page.
All of this function are auxiliars from the other function only to modify the DOM.

## Styles Folder
### styles.css
This file include all the CSS to display the pages.

## views Folder
This folder include the template to show the login, store and cart pages dynamically using EJS library.
- **cart.ejs** Include the template to show the cart.html file. Recieve a parameter of the id of the user.
- **login.ejs** Include the template to show the login.html file. Delete all session variables and call the store page.
- **login.ejs** Include the template to show the store.html file. Recieve the username and the userid.

### Bootstrap Template
The project used a free boostrap template. 


## Backend Files

### models
This folder contains all the files with the models of the collections and indexes.
- **Cart.js** Contain the mongoose model for the carts collection.
- **category.js** Contain the mongoose model for the categories collection.
- **Product.js** Contain the mongoose model for the products collection.
- **User.js** Contain the mongoose model for the users(consumers) collection.

### Controllers
This folder contains all the files with the functions to manipulate data in the mongoDB database and return the results to the routes.

#### carts.js
Contains 4 functions to manipulate the carts collection
 - **addProduct** Function that add a product to the cart or change the quantity of the product.
 - **getProducts** Function that obtain the list of products of a cart.
 - **showCart** Function that charge the template of the cart.
 - **deleteProduct** Function that delete a product from the cart or the cart if the product is the last one.


#### categories
Contain the info of the categories of the products to filter
#### products.js
Contain the info of the products.
#### users.js
Contain the info of the users (customers)

### routes
The files inside the routes folder include all the routers API created.

#### carts.js
Include the routes from http://localhost:3000/carts  
get("/")  use a template to generate the cart display
patch("/add") add a product or modify the quantity of products inside the cart.

#### products.js
Include the routes to display the products http://localhost:3000/products
get("/")  Get all the products
get("/category/:nameCategory") get the products by category

#### user.js
Include the routes to display the pages generated by the template http://localhost:3000/users
get("/login")  Just generate the initial page by the template.
post("/store")  Generate the store page after the login page calls with a form(using post)

### utilies
Contains the file with the middleware to send error messages globaly.

### views
Contains the templages to generate the html files with EJS

###  index.js
This is the principal server API application 


