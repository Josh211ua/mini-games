# Mini Games

This is a repo used to develop web based games using webpack + react + redux.
It is mostly meant as a sandbox to gain experience with these technologies, but hopefully the games will be fun too!

## Getting started

1. Clone this repo using `git clone git@github.com:Josh211ua/mini-games`

2. Run `npm install` to install the dependencies.

3. Run `npm start` to start the local web server.

4. Go to `http://localhost:3000` and you should see the app running!

## Testing and Linting

Currently tests and lint are not being automatically run on the repository, so make sure they pass before checking in new code. The available commands are:

```Shell
$ npm run lint
```

Checks your JavaScript coding styles for potential errors and suspicious usage of included functions.

```Shell
$ npm run test
```

Lints JavaScript files and tests your application with the unit tests specified in the `test` folder.

```Shell
$ npm run test:watch
```

Runs unit tests everytime you change something in your JavaScript code

## Building & Deploying

Currently things are set up to run a server on the development machine.

1. Run `npm run build`, which will compile all the necessary files in a `build` folder.

2. Run `npm run serve` which will create a serve files from that build folder.

3. Go to `http://10.0.0.107:3000/` or whichever url the server suggests.

## New Game development

TODO

## Gotchas

These are some things to be aware of when using this boilerplate.

### Images in the HTML file(s)

Adding images to the HTML is a bit of a pain right now as webpack only goes through the JavaScript file. Add the image to your HTML file how you always would:

```HTML
<!-- Normal Image -->
<img src="img/yourimg.png" />
<!-- Meta tags -->
<meta property="og:image" content="img/yourimg.png" />
<!-- ... -->
```

If you simply do this, webpack will not transfer the images to the build folder. To get webpack to transfer them, you have to import them with the file loader in your JavaScript somewhere, e.g.:

```JavaScript
import 'file?name=[name].[ext]!../img/yourimg.png';
```

Then webpack will correctly transfer the image to the build folder.

## How to contribute

While this is open source, its not really working towards anything so there is no reason to contribute.
If you like to ask questions or give suggestions on best-practices, feel free to add an issue.
