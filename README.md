# Nodejs-Express-framework-api


Introduction
Express is a responsive web framework, written in JavaScript and hosted within the NodeJS runtime environment. The module explains some of the key benefits of this framework, how to set up your development environment and how to perform common tasks in web development and publishing.




What are the main objectives of this project?
⦁ Manage Node js
⦁ Understand how to interact with Express js
⦁ Learn how to manage Express js
⦁ Manage NPM.





 Exercise 1

 
Create a file with the name e1.js
Raise a server using Express, when raising the server it has to display a message saying: 
`Server raised on port ${port}`.



  Exercise 2

  
Create a file with the name ej2.js
Raise an Express server
Handle the following paths:
Path: Site root (‘/’) ,Method: get, Action: Display a welcome message
Path: Products, Method: get, Action: Display a message that says: product listing
Path: Products, Method: post, Action: Display a message that says: create a product
Path: Products, Method: put, Action: Display a message that says: update a product
Path: Products, Method: delete, Action: Display a message that says: delete a product
Path: Users, Method: get, Action: Display a message saying: list users
Path: Users, Method: post, Action: Display a message saying: create a user
Path: Users, Method: put, Action: Display a message saying: update a user
Path: Users, Method: delete, Action: Display a message saying: delete a user
Use Postman to test all callbacks


  Exercise 3

  
Create a file with the name ej3. js
Raise an Express server
Calling localhost:3000/products should display the following JSON:
{
 description: 'Products',
 items: [
 { id: 1, name: 'Harry Potter Mug' , price: 300},
 { id: 2, name: 'FIFA 22 PS5' , price: 1000},
 { id: 3, name: 'Goku Super Saiyan Figure' , price: 100},
 { id: 4, name: 'Zelda Breath of the Wild' , price: 200},
 { id: 5, name: 'Skin Valorant' , price: 120},
 { id: 6, name: 'Star Wars Mug' , price: 220}
 ]
}
Create endpoint to be able to create a new product
Create endpoint to be able to update a product
Create endpoint to be able to delete a product
Create filter by product price
Create filter that shows products with a price between 50 and 250.
Create a filter that when I search in postman by parameter the id of a product returns me that product
Create a filter that when I search in postman by parameter the name of a product returns me that product.


Extra



Create a js interface for the previous exercise using Axios with the following requirements:
Products screen that shows the products
Screen to add products
In the products screen that each product has the option to be deleted.
