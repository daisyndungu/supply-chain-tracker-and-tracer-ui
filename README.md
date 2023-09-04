
# cp2-BucketList-Application
Supply Chain Track and Trace UI built to consume [Supply Chain tracker API](https://github.com/daisyndungu/supply-chain-tracker-api/tree/dev)

The building blocks are:
  * React
  * Typescript

## INSTALLATION

These are the basic steps to install and run the application locally.

* Prerequisite

      >> npm(version >=9.8.1) or yarn 1.22.19 installed
      >> Node version >= v16.17.0

* Clone the application:

      >> git clone https://github.com/daisyndungu/supply-chain-tracker-and-tracer-ui.git

* install requirements locally:

      >> cd supply-chain-tracker-and-tracer-ui
      >> git checkout dev
      >> npm install

* Create a .env file and copy the contents of .env.example file into it. The new file should be in the root folder. Assign the variables in the .env file with they respective values
   
 * Run server - npm/yarn. Please note, if the Supply Chain tracker API mentioned above is already running locally, it's already using port 3000. You will be prompted to expose this using port 3001 or the next available port. This will be launched in http://localhost:3001(or the next available port)

       >> npm start
   
* [Manual testing Localy]To easily get started, please refer to this [ReadMe](https://github.com/daisyndungu/supply-chain-tracker-api/blob/dev/README.md)https://github.com/daisyndungu/supply-chain-tracker-api/blob/dev/README.md. The user account added [here](https://github.com/daisyndungu/supply-chain-tracker-api/blob/dev/src/seed/seed.ts)https://github.com/daisyndungu/supply-chain-tracker-api/blob/dev/src/seed/seed.ts and be used login. Be sure to seed the data first in the server side before testing using this app.
       
