# CoolClouds Clothing Suggestions

![database diagram](https://bamboostatic.s3.eu-west-2.amazonaws.com/static/img/homepage.png)
 
*Deployed Site:* https://coolclouds.herokuapp.com/

## Installation and Usage

- Clone or download the repo
- Install all dependancies with ```npm install``` - this will need to be done for both the frontend folder and project root.
- Run your Node.js server with ```npm run nodemon```

 
## Brief: MVP opportunity
A friend of mine wanted to trial an idea within the fashion industry where we would take a different approach to how customers decide what to buy. Whilst it is not anything new for customers to be shopping for clothes to match the upcoming season, the concept is to see if planning for only the following week's weather will encourage customers to impulse buy sooner to ensure they can get the new items in time. 
 
The requirement was just an MVP to explore if this would even be worth continuing with and so I built the application loosely within a week to show the overarching idea. At this stage, there are limited layers of complexity such as user models and authentication however I will likely return to this at a later date to build out a more robust application to grow my skill set.
 
 
## **1.0 - Overview**
 
The full stack application was built using the MERN stack as Express offered a clean way to build out a RESTful API with speed and I enjoy using MongoDB's flexible document structure. I also wanted to improve on my TypeScript abilities so most of the client side was built out with this in mind.


![database diagram](https://bamboostatic.s3.eu-west-2.amazonaws.com/static/img/productpage.png)
 
## **2.0 Technology Summary**
 
### **2.1 - Client Side**
 
- React
- TypeScript
- HTML
- CSS3
- Axios

The client side was a typical index and show page which dynamically updated depending on what the weather forecast would be. Almost all the CSS was done without any frameworks with the exception of the horizontal card sliding components which was used from NPM.
 
### **2.2 - Server Side -**
 
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios
 
The server side of the application was built with the Express.js framework as I think the ease of implementing made the process much more efficient to setup URL endpoints. I personally prefer using NoSQL databases for this project because of how flexible they can be in the short term, particularly because I do not know if the fields are going to be altered over time.
 
 
## **3.0 - Database Structure**
 
![database diagram](https://bamboostatic.s3.eu-west-2.amazonaws.com/static/img/databasemodel.png)
 
The database on MongoDB only required one collection which was to contain all of the clothing items so it made CRUD functionality very fast to setup. 
There are certainly other ways for seperating out this data (for example by clothing type) however the proejct brief did not demand this. 

The clothing products were manually seeded into the database and are based on real live products being sold on the market at the time of building this app. Ideally, I would have liked to have an available third party API which could update the frontend dynamically based on changes in the market however this was not an option. This could also mean that a database for this site may not even be required as no clothing data would need to be stored permanently by us.

## **4.0 - Weather API requests**
 
The third party API openweathermap.org was used to collect forecast data and this was selected because of the detailed JSON responses they provide along with easy to use documentation.

They also allowed for quite a bit of flexibility in terms of allowing the user's latitiude and longitude to be provided in the query for a more accurate weather response.


 
## **5.0 - Personal Reflection**
 
Despite the project having a lower level of complexity, I still enjoy building fast projects like this as it is a way to continue to polish my programming skills but I also like helping others to visualize their ideas. 

The main part of building this app for me was to have a bit of a playground for improving my skillsets in some additional technologies - more specifically: GraphQL, Redux and React Native. These are technologies which I have explored previously but I want to apply them to real applications to further grow into these fields.
 
### **5.1 - Future Features / Improvements**
 
- User authentication and watchlist functionality
- React Native version of the application
- Redux integration to manage all state
- GraphQL requests to the server
 
 
## Hope you have fun!

