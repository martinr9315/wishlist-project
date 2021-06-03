# Wishlist
CS35L Spring 2021

Roxane Martin, Julian Camacho, Seng Chow Choy, Justin Hogarth, Justin Hee

Wishlist aims to simplify gift-giving by creating a space where users can easily display gifts they'd want, as well as coordinate with others to buy items on another user's list.

## How to run the app locally
1. Install MySQL Server using the MySQL community launcher
**https://dev.mysql.com/downloads/mysql/**

- Run MySQL community launcher, set root password, and change to legacy authentication (Windows)
- Open MySQL in System Preferences, initalize database, and then set root password and change to legacy authentication, finally start the MySQL server (Mac)

2. Clone the repository using:
**git clone https://github.com/martinr9315/wishlist-project.git**

3. Install all the dependencies in the project folder (/src) using:
**npm install**

4. In all files that call SQL (look through all javascript files and go to the createConnection method), change the root password to your password

5. Initialize the SQL database:
**node sql-init.js**

6. Type "init" and enter, then press Ctrl-C once the confirmation message shows up

7. In the project directory run:
**npm start**

8. Open http://localhost:3000 to view the app in your browser

