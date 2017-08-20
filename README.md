# react-native-app

1. Download and install MongoDB
2. Create folders on C drive - /data/db and change permissions to read, write and execute 
3. Open CMD and run these commands to start the mongodb service:
     - cd C:\Program Files\MongoDB\Server\3.4\bin 
     - mongod 
4. Open another CMD, navigate to backend folder and run the command to start the server
     - npm start
5. Open a browser and go to http://127.0.0.1:3000/v1/users.json to check if the server is running correctly
6. Start the Android emulator 
7. Then open another CMD, change directory to the root folder of frontend project NewApp and run 
     - npm install 
     - react-native run-android
