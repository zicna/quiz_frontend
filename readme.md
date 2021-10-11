# Quiz App
___

One Page Application where you can create your account and check your knowledge of Ruby programming language. 

---
### Table of Content

1. [Description](#description)

2. [How to install](#Instalation)

3. [How to use this app](#how-to-use-this-app)

4. [Future upgrades](#future-upgrades)
   
5. [Bugs](#bugs)

6. [Credits](#credits)

7. [License](#license)

---

## Description

This application is part of phase 4 Flatiron school. It consists of two parts. **Backend:** build in Ruby on Rails as a new API project (it does not have any view files) and **Frontend:** Single Page Application written in JavaScript. 

Challanges I faced in creating this application were: database setup, API structure without making in heavy on frontend, sending data of selected anwers back to the server side.
And if anybody would like to leave a comment or suggestions on parts that I found challenging or anything else please do.

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
  rails db:seed
  rails server
  ```
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
## Future upgrades
1. Adding user validation with password
   

## Bugs and future upgrades
1. Once ```new take``` is created if we hit refresh take will stay with nothing selected therefore it will appear as the user had ```take``` with no correct answers



## Credits

Great help for this app to see light of the day goes to [Candice Peaters](https://github.com/candicelizabeth).




## License
MIT License

Copyright (c) 2021 Milan Zivkovic
See more on LICENSE.md file