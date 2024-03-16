
# :headphones: Melofy 
### A Spotify-inspired Music App :cowboy_hat_face:
#### This is my fullstack web app which I developed using MERN stack.
## Front End: :computer:
I used React js for building user interface with more interactivity and easiy to navigate anywhere in web app.
For styling purpose I used TailwindCss , I used Iconify for icons.

## Backend: :gear:
With the help of Express.js and node.js I built the APIs for backend interaction , I used RESTful APIs where users requests are GET: To get the response data and POST: To write into database. This is what I learnt to make efficient APIs for backend.

## Database: :file_cabinet:
MongoDB is my dearest Database which I used to store the data related to Songs, Playlists and users. There are three collections in db: users, songs and playlists

## Cloud space: :cloud:
Cloudinary: It gives the experience like we are uploadin and fetching our songs on cloud, I personally used the Cloudinary to upload all my songs and used that uploaded cloudinary songs as tracks. This feature make it work like spotify, As we know Spotify API generally provides songs with less duration i.e 3 to 5 secs, and I wanted to make this app fully functional and enjoyable too.

## Authentication: :cop: 
I used Cookies authorization method, where I used JWT services for generating the tokens, as soon as user signed in, JWT token will be generated and that token will be stored in Cookies. when user try to logout , just that token will be removed from Cookies and session will be destroyed. 

## Postman Tool: :mailbox:
Basically it is a platform which helps us to Test the APIs , even when we don't have any front-end to send the requests we are able to examine the functionalities of APIs through Postman Tool.

## Features: :rocket:
+ Authentication & account management
+ Basic play pause functionalities
+ Upload and publish own songs
+ Create playlists
+ Add songs in playlist whichever you created
+ Access to your published songs
+ Search by song name

# 
#
# Getting Started with Downloading Node js.

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
