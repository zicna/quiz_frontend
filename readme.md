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
<details>
<summary>See database schema</summary>

![Database Schema](./Quiz_app%20final%20db%20setup.jpeg)
*<p align="center"> Database schema </p>*
</details>

### Front-end
Front-end is written in vanilla JavaScript, utilizing JS6 syntax and in an OOP manner utilizing prototypal inheritance.  
___

## Installation
   1. Backend [(github link)](https://github.com/zicna/quiz_backend.git "backend repo")

  - fork this repo
  - clone it to your local environment
  - terminal commands to setup backend:
  
  ```
  bundle install 
  rails db:create
  rails db:migrate
  rails db:seed
  rails server
  ```
  <spam style="color:yellow">NOTE: We can check API we are getting from server by navigating to `http://localhost:3000/users` </spam>
 1. Frontend [(github link)](https://github.com/zicna/quiz_frontend.git "frontend repo")

  - fork this repo
  - clone it to your local environment
  - in root terminal run `open index.html`
___   

## How to use this app 

- After all steps from **Installation** are done users will see the front page of our SPA where they will be asked to provide an email and password which will result in the new user account or logging into an existing one. At this point, our application uses **fake** authentication. 
- If there are any previous takes they will be listed and our users can take another take in our quiz
- after all questions are answered results will be placed on the scoreboard 
- each score will have the option to be deleted and we can **sort** all our takes

<spam style="color:yellow">*NOTE: Here is a good place to point out that as we know *seed.rb* file is used for dummy date during our development and test phases but we will require you to run `rails seed` command and it will give you some data you do not really need (such as 3,4 users with their results) but it will also give you some essential ones for this app to work: quiz, questions, and options for those questions. </spam>

___
## Challanges
 - database setup, so users can have multiple takes  
 - API structure, methods and scopes, all data manipulations would be done in the backend
 - sending data of selected anwers back to the server side.
___
## Future upgrades
- [x] Fix readme.md file
- [ ] Adding user validation
- [ ] Styling for quiz questions
___
## Bugs
1. Once ```new take``` is created if we hit refresh take will stay with nothing selected therefore it will appear as the user had ```take``` with no correct answers
___
## Credits
Great help for this app to see light of the day goes to [Candice Peaters](https://github.com/candicelizabeth). Thank you!
___

##   License
This application is avaiable as open source under the terms of the [MIT License](LICENSE).