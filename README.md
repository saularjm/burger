# Burger Eater

## Table of Contents

- [Description](#Description) 
- [Installation](#Installation) 
- [Usage](#Usage)
- [Methods/Tech](#Methods/Tech)
- [Deployed](#Deployed)

## Description

- This project is a Node, Express, and Handlebars application that connects with 
a MYSQL database to keep track of burgers to eat. It follows the MVC paradigm.

## Installation

- Download repo and run "npm install" on command line to install dependencies.
- Run schema.sql in MYSQL Workbench to instantiate database.
- Update connection properties in config/connection.js to your local settings.

## Usage

- Run "node server" on the command line and user will be shown their server and
database connection information.
- Upon navigating to the appropriate port in the web server, the user will be
presented with the HTML page generated by the Handlebars code.
    - This page consists of 2 columns and an input form:
        - The left column is a list of burgers to be eaten
            - Each burger has a "Devour It" button attached to it
        - The right column is a list of burgers that have been devoured
            - Burgers are moved to this list after the "Devour It" button has been pressed
        - The input form allows the user to add burgers to the database
            - User can check either "Devoured" or "Ready to eat" which will determine
            what column their new burger is added to

## Methods/Tech

- This application was created using HTML, JavaScript ES6, JQuery, and SQL.
- It runs on Node, Express, Handlebars, and MYSQL.
- Included node dependencies are:
    - express - For routing
    - express-handlebars - For dynamically generating HTML
    - mysql - For handling database connection

## Deployed

- Check out the deployed app:
    - 
