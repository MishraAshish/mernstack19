// SPA - Single Page Application

//backend - a server with restful api's to save/update/fetch the information
//front - creates ui on the fly, using js-libraries like react, angular, vuejs, etc..., uses rest api to save info

// one and only html rendered to create DOM - structure on the browser (very first call) - index.html
// index.html <contains - seo/sem tags (used for setting higher rank in search engine)>
// index.html <contains - a reference to js file which bundle entire application built using react/angular in core js>
// index.html <contains - a root continer where the entire application from bundlejs is rendered>


// bundle.js is
// transpiled collection of resolved and minified javascript files, used to write each component and its feature
// javascript files - are libraries like react/angular, pages like home, product, cart, signin etc...
// bundle.js also contains - minified css core libraries and the css local files
// bundle.js also contains - links to the media (images, videos etc) or media itself

// transpilation
// conversion of typescript, es6, react/angular - keywords, features into normal js format, which can run on any browser
// babel - libraries to convert es6, ts, react/angular code into - normal js format
// babel - has its own configurations

// bundling
// bundling - it is the process of combining javasript, css, html, media, files, so that every file contains the 
//              referenced file, ensures loading of the needed file goes flawless and also reduces redundancy
// bundling - needs a tool like task runner (gulp, grunt, bower and webpack etc)

// minification and code optimization
// minification - the process of removal of extra spaces, commented code, redundant code is termed as minification
// code optimization - replacing the large variable names, complex large variables etc
// is done by additional library with task runner (webpack)

// Hosting the front end
// We can host via express, webpack is better solution as it can do all other above tasks like
// transpilation, bundling, minification, compression, split etc... along with giving host from node
