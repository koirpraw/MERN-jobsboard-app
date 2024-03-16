# This is a FullStack project using ReactJS, NodeJS, ExpressJS and MongoDB - ZipRecruiter Like jobs portal

## UI Flow:
https://github.com/koirpraw/MERN-jobsboard-app/assets/7278348/b4738513-3c07-47b3-b398-2d3cb6a786a8

## Some Project Details
- There are 2 separate directories for the frontend and backend. Both are in root directory.
- To run the project, you need to run both the frontend and backend servers. To run Frontend server, go to frontend  directory and run `npm start`. To run Backend server, go to backend directory and run `npm start`.

- The frontend server runs on port 3000 and backend server runs on port 4100. The backend server is configured to run on port 4100. If you want to change the port, you can change it in backend/server.js file.

- The backend server uses ES6 module syntax. Thus the file extension is .mjs instead of .js. If you want to change it to .js, you need to change the import and export statements in the backend files.
- The database configured is MongoDB and connection strings are provided in .env file when running on local server. If you want to run this project and test it out in your local server make sure to provide the connection string.
-  Here is a mock connection string to MongoDB (MONGODB_URI=mongodb+srv://sumthn:MockUserfromMockLand@cluster0.q1bstfy.mongodb.net/) to give you example of what it looks like. This should be provided in your .env file.
-  For tips on how to access this connection string checkout MongoDB documentation. You will be connecting using driver and can select the programming language. This will give you option to copy and paste the string easily and info on what and how.
