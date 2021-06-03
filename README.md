# Wishlist
CS35L Spring 2021

Roxane Martin, Julian Camacho, Seng Chow Choy, Justin Hogarth, Justin Hee

Wishlist aims to simplify gift-giving by creating a space where users can easily display gifts they'd want, as well as coordinate with others to buy items on another user's list.

## How to run the app locally
Install MySQL Server using the MySQL community launcher

Run MySQL community launcher, set root password, and change to legacy authentication (Windows)
Open MySQL in System Preferences, initalize database, and then set root password and change authentication, finally start the MySQL server (Mac)

Clone the repository using:
**git clone https://github.com/martinr9315/wishlist-project.git**
Install all the dependencies in the project folder (/src) using:
**npm install**
Initialize the SQL database:
**node sql-init.js**
Then type "init" and enter, then press Ctrl-C once the confirmation message shows up

In the project directory run:
**npm start**
Open http://localhost:3000 to view the app in your browser

