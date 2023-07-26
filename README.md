# e-commerce-back-end
<img width="734" alt="image" src="https://github.com/AegeanGrey/e-commerce-back-end/assets/125229624/ca398787-81e8-4063-8281-cb8ae6fd09ca">


## Description
This application is meant to showcase how creating tables/models through sequelize while also being able to sync to the database can be utilized to return JSON formatted responses based on GET, POST, PUT and DELETE requests!

## Requirements
- Git/Gitbash
- Code Editor (Ex: VS Code)
- Node.js
- MySQL
- Insomnia

## Installation
To pull the environment onto your side you can do the following:

1.) Copy the SSH or HTTPS Key for the Repository by selecting the green "Code" button

2.) Go to Git or GitBash to clone the repo by entering the following into the command terminal:

git clone git@github.com:profile-name/repo-name.git

or in this case for this particular repo:

git@github.com:AegeanGrey/e-commerce-back-end.git

3.) navigate to the file path and type the following to open the code:

`code .`

We will then need to install the required packages/modules for the Ecommerce-Back-End to work:

4.) In the Code Editor, right click on the `server.js` file and select `Open in Integrated Terminal`

5.) In the Terminal, type in the following to install the required packages:

`npm i`

6.) You will need to create a `.env` file that looks like the following:

<img width="323" alt="image" src="https://github.com/AegeanGrey/e-commerce-back-end/assets/125229624/bcb98b25-9fd8-4f32-a786-08d8c8218bdb">

You will then need to insert your MySQL username into `DB_USER=''` and your MySQL password into `DB_PASSWORD=''` for the server and the ecommerce database to sync.

7.) In the Code Editor, you will then navigate to the `db` folder and right click on the `server.js` file and select `Open in Integrated Terminal`

8.) From there you enter `mysql -u root -p` and be prompted to log into your MySQL Password.

9.) Once logged in, you will enter `source schema.sql` which will create the ecommerce_db MySQL database

10.) You can logout of the MySQL by entering in `quit` and right clicking on the `server.js` file and select `Open in Integrated Terminal` one more time

11.) In the terminal you will then enter in `npm run seed` to seed the database

12.) You can then enter `node server.js` to run the server!

## Usage

There are 3 primary tables of content we will be using:

- Category
- Product
- Tag

We will be utilizing the Insomnia application to perform GET Requests for each of the following URL's in order to view all of the seeded contents within those tables:

- localhost:3000/api/categories
- localhost:3000/api/products
- localhost:3000/api/tags

If done correctly, you will recieve a JSON formatted response based on those tables:

<img width="919" alt="image" src="https://github.com/AegeanGrey/e-commerce-back-end/assets/125229624/b07ad0d8-f896-4407-b5ba-4f1968344d2d">

You can also perform a GET request for an ID to each table to recieve a particular set of data:

- localhost:3000/api/categories/1
- localhost:3000/api/products/2
- localhost:3000/api/tags/3

I am currently working on implementing POST, PUT, and DELETE requests/routing to create, update and delete any stored data if needed.

## Credits 
Starter code provided by the University of Utah and improved by AegeanGrey/Todd D.

## License
MIT License

Copyright (c) 2023 Todd D.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
