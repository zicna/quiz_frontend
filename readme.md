<h1 align="center">Quiz App</h1> 

![Quiz](https://startupbonsai.com/wp-content/uploads/2020/07/Best-Online-Quiz-Makers-Social.jpg)

<p align="center">Single Page Application where user can check their knowledge of Ruby programming language.</p>

---
### Table of Content

- [Description](#description)
- [Specification](#specification)
  - [Backend](#backend)
    - [Versioning](#versioning)
    - [Database](#database)
  - [Front-end](#front-end)
- [Installation](#installation)
- [How to use this app](#how-to-use-this-app)
- [Challanges](#challanges)
- [Future upgrades](#future-upgrades)
- [Bugs](#bugs)
- [Credits](#credits)
- [License](#license)

---

## Description

This application consists of two parts. **Backend:** build in Ruby on Rails as a new API and **Frontend:** Single Page Application written in JavaScript. It uses **fake** authentication to welcome our users and gives them option to check their knowledge in Ruby programming language. All tries will be displayed in the order they've been created or we can sort them by the percentage of correct answers. Each take can be deleted if use wishes and the number of takes is unlimited.
___

## Specification
### Backend
The server side of this application if build with Ruby on Rails and postgreSQL as database only as API(no view files).
<spam style="color:yellow">*NOTE: command to run: `rails new <app_name> --database=postgresql --api`.* </spam>

#### Versioning
- Ruby: `ruby 2.6.1p33`
- Ruby on Rails: `Rails 6.1.4.1`

<spam style="color:yellow">*NOTE: This can be checked by running `ruby -v ` and `rails -v ` in root folder of this application.* </spam>

#### Database

Database used for this application is postgreSQL.
![Database Schema](../quiz_backend/public/Quiz_app%20final%20db%20setup.jpeg)
*<p align="center"> Database schema </p>*
### Front-end
Front-end is written in vanilla JavaScript, utilizing JS6 syntax and in an OOP manner utilizing prototypal inheritance.  
___

The backend part is where we defined our Models and Controllers, associations between the models, database setup, and routes. This informations will transmit once we run a server (port: 3000 by default if not specified otherwise) in form of a JSON file. 
The frontend part will allow us to log in or create a user who can look up if records of previous quizzes and can have a new trial or delete some of the old ones. Once users submit his/hers credentials they can continue and test knowledge in the Ruby programming language. Once the quiz is submitted it will be stored on backed and the user will be able to see how he/she did, display with a number of correct answers and percentage of success of total numbers of questions. If the user does not like how they did they can delete any take they like and do the quiz again. 

## Installation
   1. [Backend](https://github.com/zicna/quiz_backend.git "backend repo")

    * fork this repo (link above)
    * clone it to your local environment
    * terminal commands to setup backend:
  ```
  bundle install 
  rails db:create
  rails db:migrate
  rails db:seed
  rails server
  ```
  <spam style="color:yellow">*NOTE: We can check API we are getting from server by navigating to `http://localhost:3000/` </spam>
 1. [Frontend](https://github.com/zicna/quiz_frontend.git "frontend repo")

    * for this repo (link above)
    * clone it to your local environment
    * open index.html in your browser
___   

## How to use this app 

Here is a good place to point out that as we know *seed.rb* file is used for dummy date during our development and test phases but we will require you to run ```rails seed``` command and it will give you some date you do not really need (such as 3,4 users with their results) but it will also give you some essential ones for this app to work: quiz, questions, and options for those questions. 
Users can get an account by typing username and email which will create a user (or retrieve the user from the database if the email is already in use) and from that point, the user can see results from previous takes (if there is any) or have another take to test his knowledge. 
Each question will have 4 options, requirement is that each question must have an option checked before the user is allowed to submit the quiz. 
After submission *new take* will be saved in the database with all *responses* which will connect *take*, *question*, and *option* that was selected. 
On the server side, we will be redirected to ```users#show```(controller#action) which will render the users info with new take included. 
___
## Challanges
 - database setup, so users can have multiple takes  
 - API structure, methods and scopes, all data manipulations would be done in the backend
 - sending data of selected anwers back to the server side.
___
## Future upgrades
- [ ] Fix readme.md file
- [ ] Adding user validation
- [ ] Styling for quiz questions
___
## Bugs
1. Once ```new take``` is created if we hit refresh take will stay with nothing selected therefore it will appear as the user had ```take``` with no correct answers
___
## Credits
Great help for this app to see light of the day goes to [Candice Peaters](https://github.com/candicelizabeth).
___

##   License
This application is avaiable as open source under the terms of the [MIT License](LICENSE).