# [![mit license](https://img.shields.io/github/license/mernjs/create-mern-app)](https://github.com/mernjs/create-mern-app/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/create-mernjs-app)](https://www.npmjs.com/package/create-mernjs-app) [![npm downloads](https://img.shields.io/npm/dy/create-mernjs-app)](https://www.npmjs.com/package/create-mernjs-app)

<p align="center">
  <a target="_blank" href="https://mernjs.github.io/create-mern-app" rel="noopener">
 <img src="https://mernjs.github.io/create-mern-app/assets/logo1.png" alt="Logo"></a>
</p>
<h5 align="center">Set up a modern web, mobile and desktop app by running one command.</h5>

<h5 align="center">
If you find this code useful, don't forget to <a target="_blank" href="https://github.com/mernjs/create-mern-app" rel="noopener">⭐ star the repo ⭐</a> 
</h5>

<h4>Create MERN App</h4>
<h5>Create MERN App provide boilerplates for building Web App, Mobile App, Desktop App, Chrome Extension & NPM Package Development in JavaScript.</h5>

<h4>Node Version </h4>

| Version | Supported          |
| ------- | ------------------ |
| node-version >= 18   | :white_check_mark: |
| node-version  < 18   | :x:  |

<h4>Install create-mernjs-app globally</h4>

```
npm install create-mernjs-app -g 
```

<h4>Creating an App</h4>

```
create-mernjs-app my-app
```

<h4>Creating a Library</h4>

```
create-mernjs-app my-library --template library
```

Read official [changelog](https://github.com/mernjs/create-mern-app/releases) for more information.

<h4>App Templates</h4>

App templates for building application.

| SN. | Template | Type | Dependencies |
| ------ | ------ | ------ | ------ |
| 1 | [MERN Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/app/mern-app) | Web | @reduxjs/toolkit axios body-parser cors dotenv ejs express faker history lodash mongoose next next-pwa next-redux-wrapper react react-dom react-icons react-redux react-toastify redux redux-form redux-logger redux-persist redux-saga styled-components |
| 2 | [NodeJS MongoDB Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/app/nodejs-mongodb-app) | Web | body-parser cors dotenv ejs express faker lodash mongoose morgan |
| 3 | [NodeJS MySQL Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/app/nodejs-mysql-app) | Web | body-parser cors dotenv ejs express faker lodash mysql sequelize morgan |
| 4 | [NextJS Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/app/nextjs-app) | Web | @reduxjs/toolkit axios history lodash next next-redux-wrapper react react-dom react-icons react-redux react-toastify redux redux-form redux-logger redux-persist redux-saga styled-components |
| 5 | [GetsbyJS Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/app/gatsbyjs-app) | Web | @hookform/error-message @reduxjs/toolkit gatsby gatsby-plugin-image gatsby-plugin-manifest gatsby-plugin-react-redux gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp history react react-dom react-hook-form react-redux react-toastify redux redux-logger redux-persist styled-components |
| 6 | [ReactJS Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/app/reactjs-app) | Web | @reduxjs/toolkit axios history react react-dom react-icons react-redux react-router-dom react-scripts react-toastify redux redux-form redux-logger redux-persist styled-components web-vitals |
| 7 | [ElectronJS Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/app/electronjs-app) | Desktop | @reduxjs/toolkit axios history react react-dom react-icons react-redux react-router-dom react-scripts react-toastify redux redux-form redux-logger redux-persist styled-components web-vitals |
| 8 | [React Native Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/app/react-native-app) | Mobile | @react-native-async-storage/async-storage @react-native-community/masked-view @react-navigation/native @react-navigation/stack @reduxjs/toolkit axios lodash native-base react react-native react-native-gesture-handler react-native-safe-area-context react-native-screens react-native-toast-message react-redux redux redux-form redux-logger redux-persist styled-components |
| 9 | [ReactJS Chrome Extension Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/app/reactjs-chrome-extension-app) | Chrome Extension | @hot-loader/react-dom @reduxjs/toolkit axios history react react-dom react-icons react-redux react-router-dom webpack react-toastify styled-components |
| 10 | [ReactJS Webpack Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/app/reactjs-webpack-app) | Web | @reduxjs/toolkit axios history react react-dom react-icons react-redux react-router-dom webpack react-toastify styled-components |

<h4>Library Templates</h4>

Library templates for building npm package.

| SN. | Template | Type | Dependencies |
| ------ | ------ | ------ | ------ |
| 1 | [JavaScript Library Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/library/javascript-library) | Web | @babel/core @babel/plugin-proposal-class-properties @babel/preset-env babel-eslint babel-loader clean-webpack-plugin copy-webpack-plugin css-loader eslint eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y file-loader fs-extra html-loader html-webpack-plugin node-sass sass-loader source-map-loader style-loader terser-webpack-plugin ts-loader typescript webpack webpack-cli webpack-dev-server |
| 2 | [ReactJS Library Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/library/reactjs-library) | Web | @babel/core @babel/preset-env @babel/preset-react @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-terser @storybook/react eslint eslint-config-google eslint-plugin-react prettier react react-dom rollup rollup-plugin-import-css |
| 3 | [NodeJS Library Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/library/nodejs-library) | Web | @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-terser concurrently eslint eslint-config-google nodemon prettier rollup rollup-plugin-node |
| 4 | [ExpressJS Library Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/library/expressjs-library) | Web | @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-terser concurrently eslint eslint-config-google nodemon prettier rollup rollup-plugin-node |
| 5 | [NextJS Library Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/library/nextjs-library) | Web | @babel/core @babel/preset-env @babel/preset-react @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-terser @storybook/react eslint eslint-config-google eslint-plugin-react prettier react react-dom rollup rollup-plugin-import-css |
| 6 | [React Native Library Boilerplate](https://github.com/mernjs/create-mern-app/tree/master/templates/library/react-native-library) | App | @types/react @types/react-native react react-native react-native-builder-bob typescript |

<h4>Why is Create MERN App?</h4>

Create MERN App allows you to create a new MERN app within seconds. It is maintained by the creators of Create MERN App.

<h4>Support</h4>

If you have any issues or bugs, report in our [GitHub](https://github.com/mernjs/create-mern-app/issues)

Please message us, If you have any query, suggestions or security concerns via [GitHub Discussions](https://github.com/mernjs/create-mern-app/discussions)

<p style="margin-left: '30px', margin-right: '30px'"><span style="text-align: 'left'">©2023 <a href="https://github.com/mernjs/create-mern-app/blob/master/LICENSE" target="_blank"> Create MERN App</a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="float: 'right'"><b>By: </b> <a href="https://vijay-pratap-singh.netlify.app" target="_blank"> Vijay Pratap Singh</a></span></p>
