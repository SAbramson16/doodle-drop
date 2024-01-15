# DoodleDrop

## Description 

DoodleDrop is a web application designed to allow artists to share their art. The user may elect to upload their art and categorize it based on the style of art, whether a sketch, realistic portrait, etc. You may also make comments on posted art pieces. 




## Authors

- [Sharon Abramson](https://www.github.com/SAbramson16)
- [Kay Landry](https://www.github.com/Kaystaken)
- [Anthony Ramdeen](https://www.github.com/RecceRaven)


## Installation

Installation is not required when viewing the application using a web browser. However, if you choose to run this application from the GitHub Repo, then you must input the following code in a terminal running from the main branch. Please note you will also need an .env file which contains the necessary keys, therefore this method is not recommended.

```bash
  npm i

  mysql -u root -pYOURPASSWORDHERE
  mysql source schema.sql
  mysql use doodle_db
  quit

  node seeds/index.js

  npm start
```
    
## Features

- Login using existing credentials or create a new account
- Ability to upload your art
- Choose which category to view
- Comment on existing art pieces


## Screenshots

###Login:
![DoodleLog](https://github.com/RecceRaven/DoodleDrop/assets/149850541/f784f93a-36b2-4e59-a9ed-96091b255fbe)

###Upload:
![DoodleUpload](https://github.com/RecceRaven/DoodleDrop/assets/149850541/031d6b68-f9ae-4044-bb82-7e4f9d1352eb)


## Addition Resources

###Link to repo on GitHub:

[Click Me to See Repo](https://github.com/RecceRaven/DoodleDrop)

###Link to deployed application:

[Deployed Application](https://doodledrop-7357eeb23db1.herokuapp.com/)

