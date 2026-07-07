# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# features for a logged in person

-Browse
-headers
-main movie
-trailer in bg
-title & descripiton
-movie suggestions
-moviesList\*n(horizontal scroll(from left to right),can hover them to see about the movie details and a play button and info option)

# things for a logged out person

-Signup with a simple heading in the center with email and get started thing
-login feature with a simple button on the top-right corner
-email or phone number it is asking
-password
-simple button(sign in)

# features to implement alone

-only show the signout button if the user is logged in - done
-when person is logging in u have to display a message of it sshowing welcom and the username
-also use any ui toolkit to show the pop up thing for logout and editing the user things - done

# implemented the above features,almost everything is done now.. the authentication and authorization work is done for today

# features to implement
-when user is not loggedin then it can't go to browse page -done
-if the user is loggedin then it can't go to login or sign up page -done

# the next time before starting any project i will surely watch the redux tool kit one shot

# fetched movies after login and doing all the fuzz for so many hours
-stored it in movies slice getting the data fixed all the bugs of login and logout

# now the work is to create the browse page

-main section(contains playing trailer of some kind of movie)
    -main vdo bg
    -vdo title
-secondary containers
    -movie lists with thier cards

# now the important part comes here where we have to use our thing like chat gpt
    - integrating gpt with our part to enhance the results
    - better for movie recomendation system