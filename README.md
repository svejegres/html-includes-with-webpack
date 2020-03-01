# How to INSTALL
From the project root:
1. run `npm i`;
2. run `npm run build`;
3. open `{project root}/dist/index.html` file in the browser.

# How to USE

All work should be done inside `src` folder.

With current setup, you need to run `npm run build` each time you want to see your changes made to `src` folder.

**NOTE!**
When creating new pages it's required to add newly created file name to the `pages` array inside `webpack.config.js` file.

Otherwise after running `npm run build` newly created pages would not be added to `dist` folder.