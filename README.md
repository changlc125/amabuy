#amabuy

#Practice

1. Introduction

2. install tools:prettier,eslint,git

3. Create React App  
   (cd Desktop -> mkdir filename -> cd filename -> npx Create-React-App frontend )

4. Create Git Repository  
   ( cd frontend -> rm -rf .git -> drag .gitignore under file amabuy -> no slash in front of build and node modules,save -> connnect souce control to github )

5. List Products  
   5-1. create products array  
   5-2. add product images  
   5-3. render products  
   5-4.style products

6. Add routing  
   6-1. (cd frontend )nmp i react-router-dom  
   6-2. create route for home screen  
   6-3. create router for product screen

7. Create Node.JS Server  
   7-1. (cd backend)run npm init in root folder  
   7-2. update package.json set type: module  
   (we use import instead of require for import packages)  
   7-3. add .js to imports  
   7-4. npm install express  
   (in 7-1 terminal:cd backend -> check package.json dependencies)  
   7-5. create server.js  
   7.6. add start command as node backend/server.js  
   7-7. require express  
   7-8. create route for / return backend is ready  
   7-9. move products.js from frontend to backend  
   7-10. create route for /api/products  
   7-11. return products  
   (cd backend => node server.js)  
   (http://localhost:5000/api/products => return products )  
   (stop it => control + c => rerun => node server.js )  
   (cd backend => npm install nodemon --save-dev => once there is any change in backend code,update server when I have change in backend code)  
   (--save-dev just for development,if we are done with development,we are not use nodemon => package.json => devDependencies)  
   ( package.json =>  
   "scripts": {  
   "start": "nodemon server.js",  
   })  
   7-12. run npm start

8. Fetch Products from backend  
   8-1. set proxy(代理,not directly connected) in package.json  
   (package.json in frontend => add "proxy": "http://localhost:5000",)  
   (frontend terminal: cd frontend => npm start )  
   (backend terminal: cd backend =npm start)  
   8.2. npm install axios  
   (https://axios-http.com/docs/intro )  
   (new frontend terminal: cd frontend => npm install axios ))  
   8-3. use state hook  
   8-4. use effect hook  
   8-5. use reducer hook

9. Manage State By Reducer Hook  
   (replace useState with Reducer Hook to handle more comolex state)  
   (when we sent ajax request to backedn, state is complex,next state depends on previsou respond)  
   9-1. define reducer  
   9-2. update fetch data  
   9-3. get state from useReducer  
   (cd frontend => npm install use-reducer-logger --force )
