# Testing a React App
## npm installation  

- Install ***Jest*** for unit testing.

- Install ***react test renderer*** for snapshot testing.

~~~javascript  
  npm install --save-dev jest react-test-renderer
~~~  

## Configuration 
- Config the testing script in **package.json**.

~~~  
"test": "react-scripts test"
~~~  

## Running test 
- All test files should include ***.test - App.test.js***, to be a test file.
- Run a test using
~~~javascript  
  npm test
~~~  
