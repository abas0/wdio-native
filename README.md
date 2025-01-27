# wdio-native

# Project Instalation 

Pre-conditions:

Before you start, you need to have:
- Git installed
- Npm installed
- Android installed

1. Clone this project by running

Once you have the git installed (if you don't, please follow these steps https://github.com/git-guides/install-git), insert in your terminal this command . This will clone the current project to your own local
```sh
git clone [https://github.com/webdriverio/appium-boilerplate.git](https://github.com/abas0/wdio-native.git)
```

2. Install all dependencies
Once you have NodeJs installed (if you don't, please follow these steps https://www.geeksforgeeks.org/how-to-download-and-install-node-js-and-npm/) , insert this command below on your terminal with the cloned project already opened

```sh
npm install
```
3. Run the tests case
To reproduce the test cases, follow the steps below:
```sh
npx wdio run wdio.conf.js
```

If you need to run only a specific file, you can run this command
```sh
npx wdio run wdio.conf.js --spec ./test/specs/file-name.spec.js
```

# Test cases

Ten test cases were implemented for the app [`native-demo-app`](https://github.com/webdriverio/native-demo-app/releases), covering Login, Sign Up, Forms, and Drag and Drop scenarios.

### CT01 - Login a user successfully
1. Open the application
2. Click on Login option on Menu
3. Insert a valid email
4. Insert a valid password (with more than 8 characteres)
5. Click on Login
  Expected result: a success pop-up

### CT02 - Attempt to log in with invalid inputs and fail
1. Open the application
2. Click on Login option on Menu
3. Insert a blank email
4. Insert a blank password
5. Click on Login
   Expected result: Show a red error message for email and password

### CT03 - Sign up successfully
1. Open the application
2. Click on Login option on Menu
3. Click on Sign Up tab 
4. Insert a new valid email
5. Insert a valid password
6. Confirm the password one more time
7. Click on Sign Up
   Expected result: a success pop-up

### CT04 - Attempt to sign up with invalid inputs and fail
1. Open the application
2. Click on Login option on Menu
3. Click on Sign Up tab 
4. Insert an invalid email
5. Insert an invalid password
6. Confirm the password one more time
7. Click on Sign Up
   Expected result: Show a red error message for email and password

### CT05 - Attempt to sign up with a different confirm password
1. Open the application
2. Click on Login option on Menu
3. Click on Sign Up tab 
4. Insert a new valid email
5. Insert a valid password
6. Insert a different password on Confirm Password field
7. Click on Sign Up
   Expected result: Show a red error message for confirm password field

### CT06 - Fill the forms successfully
1. Open the application
2. Click on Forms option on Menu
3. Insert anything on Input field
4. Click on Dropdown
5. Choose an Option
6. Click on Active
   Expected result: Show an AlertDialog

### CT07 - Fill the forms successfully
1. Open the application
2. Click on Forms option on Menu
3. Insert anything on Input field
   Expected result: You have typed field has to have the same input as Input Field

### CT08 - Drag and drop all the elements successfully
1. Open the application
2. Click on Forms option on Drag
3. Drag and drop each image on the corresponding space
   Expected result: It's going to show a congratulations message

### CT09 - Drag and drop all the elements successfully
1. Open the application
2. Click on Forms option on Drag
3. Drag and drop any image on the corresponding space
4. Click on restart button
  Expected: every dragged image back to the starting place

### CT10 - Drag and drop all the elements successfully
1. Open the application
2. Click on Forms option on Drag
3. Drag and drop any image on the wrong space
  Expected: the select image must have to the starting place
   
